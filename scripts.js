
        const botao = document.querySelector('.botao-menu')
const menulateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const backgground = document.querySelector('.backgroud')

botao.addEventListener('click', () => {
    menulateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    backgground.classList.toggle('ativo')
    document.body.style.backgroundColor = menulateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})

backgground.addEventListener('click', () => {
    menulateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    backgground.classList.remove('ativo')
    document.body.style.backgroundColor = "#ecf0f1"
})

function filterContent() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const content = document.getElementById('contentToSearch');
    const paragraphs = content.getElementsByTagName('p');
    const image = content.getElementsByTagName('img');
    const title = content.getElementsByTagName('h2');

    for (let i = 0; i < paragraphs.length; i++) {
        let textValue = paragraphs[i].textContent || paragraphs[i].innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            paragraphs[i].style.display = "";
            image[i].style.display = "";
            title[i].style.display = "";
            
        } else {
            paragraphs[i].style.display = "none";
            image[i].style.display = "none";
            title[i].style.display = "none";
        }
    }
}