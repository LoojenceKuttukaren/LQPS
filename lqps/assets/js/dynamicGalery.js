function image1() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var dir = "/assets/images/image1";
    var fileextension = "*";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: baseUrl + dir
        , success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var name = this.href.split('/').pop();
                var filename = baseUrl + dir + "/" + name;
                $('#image').prepend('<img class="imageSrc" src="' + filename + '"><br>');
            });
        }
    });
}

function image2() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var dir = "/assets/images/image2";
    var fileextension = ".png";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: baseUrl + dir
        , success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var name = this.href.split('/').pop();
                var filename = baseUrl + dir + "/" + name;
                $('#image').prepend('<img class="imageSrc" src="' + filename + '"><br>');
            });
        }
    });
}

function image3() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var dir = "/assets/images/image3";
    var fileextension = ".png";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: baseUrl + dir
        , success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var name = this.href.split('/').pop();
                var filename = baseUrl + dir + "/" + name;
                $('#image').prepend('<img class="imageSrc" src="' + filename + '"><br>');
            });
        }
    });
}