console.log("blogInputs.js TEST");

$("#home-btn").on("click", function() {
    console.log("");
    // layout1Input();
});


$("#layout1-btn").on("click", function() {
    console.log("Layout1 TEST");
    layout1Input();
});

$("#layout2-btn").on("click", function() {
    console.log("Layout2 TEST");
    layout2Input();
});

const layout1Input = () => {
    const inputDiv = $("#input-div")
    inputDiv.empty();
    inputDiv.append(`<form>`);
    inputDiv.append(`<div class="form-group">`);
    inputDiv.append(`<label>Title</label>`);
    inputDiv.append(`<input class="form-control" id="title-input">`);
    inputDiv.append(`<label>Header 1</label>`);
    inputDiv.append(`<input class="form-control" id="header1-input">`);
    inputDiv.append(`<label>Text 1</label>`);
    inputDiv.append(`<textarea class="form-control" id="text1-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Img1</label>`);
    inputDiv.append(`<input class="form-control" id="img1-input">`);
    inputDiv.append(`<label>Text 2</label>`);
    inputDiv.append(`<textarea class="form-control" id="text2-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Img2</label>`);
    inputDiv.append(`<input class="form-control" id="img2-input">`);
    inputDiv.append(`<label>Category</label>`);
    inputDiv.append(`<input class="form-control" id="category">`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</form>`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</div>`);

    inputDiv.append(`<button id="submit1-btn"> Submit </button>`)
};

const layout2Input = () => {
    const inputDiv = $("#input-div")
    inputDiv.empty();
    inputDiv.append(`<form>`);
    inputDiv.append(`<div class="form-group">`);
    inputDiv.append(`<label>Title</label>`);
    inputDiv.append(`<input class="form-control" id="title-input">`);
    inputDiv.append(`<label>Img1</label>`);
    inputDiv.append(`<input class="form-control" id="img1-input">`);
    inputDiv.append(`<label>Header 1</label>`);
    inputDiv.append(`<input class="form-control" id="header1-input">`);
    inputDiv.append(`<label>Text 1</label>`);
    inputDiv.append(`<textarea class="form-control" id="text1-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Side Header </label>`);
    inputDiv.append(`<input class="form-control" id="header2-input">`);
    inputDiv.append(`<label>Side Text</label>`);
    inputDiv.append(`<textarea class="form-control" id="text2-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Category</label>`);
    inputDiv.append(`<input class="form-control" id="category">`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</form>`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</div>`);

    inputDiv.append(`<button id="submit2-btn"> Submit </button>`)
}