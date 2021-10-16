function scheduleTemplate(tp) {
    switch (parseInt(moment(tp.file.title).format('d'))) {
      case 1: return tp.file.include("[[Schedule - 01 Monday]]")
      case 2: return tp.file.include("[[Schedule - 02 Tuesday]]")
      case 3: return tp.file.include("[[Schedule - 03 Wednesday]]")
      case 4: return tp.file.include("[[Schedule - 04 Thrusday]]")
      case 5: return tp.file.include("[[Schedule - 05 Friday]]")
      case 6:
      case 0: return tp.file.include("[[Schedule - Weekend]]")
      default: return tp.file.include("[[Schedule - +Weekday]]")
    }
  }
  
  module.exports = scheduleTemplate