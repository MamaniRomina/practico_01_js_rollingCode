let frase= prompt('ingrese una frase');
let largofrase=frase.length;
contador=0;
for (let index = 0; index <largofrase; index++) {
    const element =frase.toLocaleLowerCase().charAt(index);
    if ((element==="a")|| (element==="e")||(element==="i")||(element==="o")||(element==="u")) {
        contador++ ;
    }
    document.write(contador );
}