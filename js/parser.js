//функция считывает данные со страницы и записывает в бд с помощью jsonservera
// https://www.youtube.com/watch?v=wPG7RgPzxmM

window.addEventListener('DOMContentLoaded', () => {

    function countAndSend() {
        const body = document.querySelector('body');
        let textNodes = []

        function recursy(element) {
            element.childNodes.forEach(node => {

                if (node.nodeName.match(/^H\d/)) { //регулярное выражение которое говорит нам что именно нужно считать
                    const obj = {
                        header: node.nodeName,
                        content: node.textContent,
                    };
                    textNodes.push(obj);
                } else {

                    recursy(node);
                }
            });
        };

        recursy(body);

        console.log(textNodes);

        fetch(' http://localhost:3000/parse', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(textNodes)
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    // countAndSend();




});
