function ajustarTamanhoImagemGoogle(url, tamanho = 256) {
    return url.replace(/=s\d+-c$/, `=s${tamanho}-c`);
}

export default ajustarTamanhoImagemGoogle;