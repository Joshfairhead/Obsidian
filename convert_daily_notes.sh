#/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

roam_date_to_obsidian() {
  date --date="$(echo "${*}" | sed 's/th//;s/nd//;s/rd//;s/1st/1/')" \
    '+%Y-%m-%d'
}

while IFS= read -r line; do
  roam_daily_note=${line/%.md/}
  obsidian_daily_note=$(roam_date_to_obsidian ${roam_daily_note})

  # add front matter
  echo "---" >> ${obsidian_daily_note}.md
  echo "tags: [daily]" >> ${obsidian_daily_note}.md
  echo "---" >> ${obsidian_daily_note}.md

  cat "${roam_daily_note}.md" >> ${obsidian_daily_note}.md

  # update links
  sed -i "s/\[\[${roam_daily_note}]]/[[${obsidian_daily_note}]]/g" *.md */*.md || true

  # give it a relevant timestamp
  touch -d ${obsidian_daily_note} ${obsidian_daily_note}.md

  rm "${roam_daily_note}.md"
done

