function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass('strike');
    });

    let crossOutButton = $('<img></img>');
    crossOutButton.attr('src', 'images/trash.svg');
    li.append(crossOutButton)

    crossOutButton.on("click", deleteListItem)

    function deleteListItem() {
        li.addClass('delete')
    }
    $('#list').sortable();

}

function clearAll() {
    let modalContainer = $('#modalcontainer');
    modalContainer.addClass('is-visible');
    let modal = $('<div></div>');
    modal.addClass('modal');
    modalContainer.append(modal);
    let modalHeading = $('<h1>Are you sure?<h1>');
    modal.append(modalHeading);

    let yesButton = $('<button>Yes</button>');
    yesButton.addClass('yesbutton');
    let noButton = $('<button>No</button>');
    noButton.addClass('nobutton');

    modal.append(yesButton);
    modal.append(noButton);

    yesButton.on("click", confirmClear);
    noButton.on("click", doNotClear)

    function confirmClear() {
        $('#list').empty();
        modalContainer.removeClass('is-visible');
        modal.remove();
    }

    function doNotClear() {
        modalContainer.removeClass('is-visible');
        modal.remove();
    }

}
