function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}