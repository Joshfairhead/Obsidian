function scheduleTemplate(tp) {
    switch (parseInt(moment(tp.file.title).format('d'))) {
      case 1: return tp.file.include("[[Monday]]")
      case 2: return tp.file.include("[[Tuesday]]")
      case 3: return tp.file.include("[[Wednesday]]")
      case 4: return tp.file.include("[[Thursday]]")
      case 5: return tp.file.include("[[Friday]]")
      case 6: return tp.file.include("[[Saturday]]")
      case 0: return tp.file.include("[[Sunday]]")
      default: return tp.file.include("[[DailyTemplate]]")
    }
  }
  
  module.exports = scheduleTemplate