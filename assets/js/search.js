let arrayLocations = [
    {
        title: "An Giang",
        q: "angiang",
    },
    {
        title: "Bà Rịa – Vũng Tàu",
        q: "Vũng Tàu",
    },
    {
        title: "Bắc Giang",
        q: "Bắc Giang",
    },
    {
        title: "Bắc Ninh",
        q: "Bắc Ninh",
    },
    {
        title: "Bến Tre",
        q: "Bến Tre",
    },
    {
        title: "Hà Nội",
        q: "Hanoi",
    },
    {
        title: "TP Hồ Chí Minh",
        q: "saigon",
    },
];

const inputSearchElement = document.querySelector(".search input");
const renderResult = document.querySelector(".render-result-and-related");

if (inputSearchElement && renderResult) {
    if (inputSearchElement.value.length === 0) {
        renderResult.style.display = "none";
    }

    inputSearchElement.addEventListener("input", handleInputSearch);
    inputSearchElement.addEventListener("blur", function () {
        renderResult.style.display = "none";
    });

    inputSearchElement.onfocus = function () {
        renderResult.style.display = "block";
    };
}

function handleInputSearch(e) {
    if (inputSearchElement.value.length === 0) {
        renderResult.style.display = "none";
        return;
    }

    const searchString = e.target.value; // Chuỗi bạn muốn tìm kiếm
    const regexPattern = new RegExp(`${searchString}`, "i"); // Tạo biểu thức chính quy với cờ "i" (không phân biệt hoa thường)

    // Sử dụng biểu thức chính quy để tìm kiếm các từ
    const results = arrayLocations.filter((word) =>
        regexPattern.test(word.title)
    );

    if (results.length === 0) {
        renderResult.style.display = "block";
        renderResult.innerHTML = `
        <ul>
            <li class="text-center">Không Có Kết Quả Có Liên Quan</li>
        </ul>
        `;
    } else {
        renderResult.style.display = "block";
        renderResult.innerHTML = `
        <ul>
            ${results
                .map(
                    (word) => `
                    <li>${word.title}</li>
                `
                )
                .join("")}
        </ul>
        `;
    }
}
