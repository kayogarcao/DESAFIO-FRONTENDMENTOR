
function carregar() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            const lista = document.querySelector('.lista')

            data.map(item => {

                const card = document.createElement('div')
                card.classList.add("itens")

                let img = document.createElement('img')
                img.src = item.icon
                img.classList.add('img')

                let titulo = document.createElement('h3')
                titulo.textContent = item.category

                let imgTitulo = document.createElement('div')
                imgTitulo.classList.add('imgTitulo')

                let notas = document.createElement('span')
                notas.textContent = item.score + '/100'
                notas.classList.add('score')



                imgTitulo.appendChild(img)
                imgTitulo.appendChild(titulo)
                card.appendChild(imgTitulo)
                card.appendChild(notas)

                lista.classList.add('lista')
                lista.appendChild(card)








            });
        });
    }
    carregar()