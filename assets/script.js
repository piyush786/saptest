function getCount(amount,note) {
        return [ parseInt(amount/note), amount%note] ;
}


function showNotes (ev) {
    ev.preventDefault();
    var notesArr= [2000,500,200,100,50,20,10,5,2,1]
    var amount = Number($('#amount-input').val())    
    var disNotes= []
    var totalCount = 0
    if(amount && Number.isInteger(amount)){
        $('#firstList').html('')
        $('#secondList').html('')
        for(i=0; i<notesArr.length; i++) {
            currNote = getCount(amount,notesArr[i]);
            amount = currNote[1];
            totalCount += currNote[0]
            var statement = currNote[0] + " notes of Rs "+ notesArr[i];
            disNotes.push(statement)
            if(i%2==0){
                $('#secondList').prepend("<li>"+statement+"</li>")
            } else {
                $('#firstList').prepend("<li>"+statement+"</li>")
            }
            $('#notesInfo').show()
            $('#notesInfoMsg').hide()
            $('#noteCount').text(totalCount)
        }

    } else {
        alert("Please Enter A valid Amount")
    }
}