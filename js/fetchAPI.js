let useAPI = document.getElementsByClassName("useAPI")

fetch("../Api.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPI.length; j++) {
                useAPI[j].innerHTML += `
                <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-blog">
                    <div class="blog-thumb">
                        <img class="img-fluid" src="${data[i].image}" alt=""
                            style="height: 270px;">
                    </div>
                    <div class="blog-details">
                        <div class="blog-meta">
                            <a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>13th Dec</a>
                            <a href="#" class="m-gap"><span class="lnr lnr-heart"></span>15</a>
                            <a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>04</span></a>
                        </div>
                        <h5><a href="#">${data[i].title}</a></h5>
                        <p>${data[i].disc}</p>
                    </div>
                </div>
            </div>
            `
            }
        }
    })