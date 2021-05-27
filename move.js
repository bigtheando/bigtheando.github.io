$(function() {
    const dayJqList = $(".day")
    const dayList = []
    for (let index = 0; index < dayJqList.length; index++) {
        const day = dayJqList.eq(index);
        dayList.push(day.text())
    }

    const sb = $("select.move-box")
    let optionText = "<option> </option>"
    for (let index = 0; index < dayList.length; index++) {
        const day = dayList[index];
        optionText += "<option value='" + day + "'>" + day + "</option>"
    }
    sb.append(optionText)

    $("span.move-button").click(function() {
        const targetBox = $(this).parent().find(".move-box")
        const day = targetBox.val()
        const targetDayOffset = $("#" + day).offset().top - 120
        $("html, body").scrollTop(targetDayOffset)
    })
})