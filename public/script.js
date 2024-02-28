document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('userthumb').onchange = function (e) {
        loadImage(
            e.target.files[0],
            function (img) {
                document.querySelector("#thumb .thumbinner").innerHTML = `<div class="stories hide"></div>`;
                document.querySelector("#thumb .thumbinner").appendChild(img);
            }, {
            canvas: true
        }
        );
    };
    document.getElementById('image').onchange = function (e) {
        loadImage(
            e.target.files[0],
            function (img) {
                document.getElementById("mainimage").innerHTML = "";
                document.getElementById("mainimage").appendChild(img);
            }, {
            maxWidth: 414,
            canvas: true
        }
        );
    };
    document.getElementById("username").onchange = e => {
        [...document.getElementsByClassName("username")].map(item => {
            item.innerHTML = e.target.value;
        });
    };
    document.getElementById("likes").onchange = e => {
        document.getElementById("likenumber").textContent = e.target.value.toString();
    };
    document.getElementById("ubication").onchange = e => {
        document.getElementById("ubicationtxt").innerHTML = e.target.value;
    };
    document.getElementById("comments").onchange = e => {
        document.getElementById("commentno").innerHTML = e.target.value;
    };
    document.getElementById("comment").onchange = e => {
        let comment = e.target.value
        comment = comment + " "
        const commentSplit = comment.split(/(?=[#@])(.*?)(?=[\s])/gm)
        const commProcessed = commentSplit.map(chunk => {
            if (["#", "@"].includes(chunk[0])) { return `<span class="hash">${chunk}</span>` }
            else { return chunk }
        }).reduce((a, b) => a + b, "").slice(0, -1)
        document.getElementById("commentbody").innerHTML = commProcessed;
    };
    document.getElementById("chkborder").onchange = () => {
        document.getElementById("instagram").classList.toggle("borde");
    };
    document.getElementById("liked").onchange = () => {
        document.getElementById("like").classList.toggle("liked");
    };
    document.getElementById("ymas").onchange = () => {
        document.getElementById("commentbody").classList.toggle("ymas");
    };
    document.getElementById("stories").onchange = () => {
        document.querySelector(".stories").classList.toggle("hide");
    };
    document.getElementById("esvideo").onchange = () => {
        document.querySelector(".esvideo").classList.toggle("hide");
    };
    document.getElementById("width").onchange = e => {
        document.getElementById("instagram").style.width = e.target.value;
    };
    document.getElementById("forceheight").onchange = e => {
        document.getElementById("height").disabled = !e.target.checked;
        if (!e.target.checked) {
            document.getElementById("mainimage").style.maxHeight = ""
        }
        else {
            document.getElementById("mainimage").style.maxHeight = document.getElementById("height").value + "px"
        }
    };
    document.getElementById("height").onchange = e => {
        if (document.getElementById("forceheight").checked) {
            document.getElementById("mainimage").style.maxHeight = e.target.value + "px";
        }
    };

    document.getElementById("elboton").addEventListener("click", () => {
        window.scrollTo(0, 0)
        html2canvas(document.getElementById("instagram"), {
            scale: 2
        }).then(function (canvas) {
            document.body.appendChild(canvas);
            const link = document.createElement('a');
            link.download = 'instamock.png';
            link.href = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            document.body.removeChild(canvas);
        });
    });
});




