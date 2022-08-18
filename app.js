let input=document.getElementById('lbsInput');
input.addEventListener('input',(e)=>{
    let pounds=e.target.value;
    document.getElementById('output').style.display='';
    document.getElementById('gramsOutput').innerHTML=pounds/0.0022046;
    document.getElementById('kgOutput').innerHTML=pounds/2.2046;
    document.getElementById('ozOutput').innerHTML=pounds*16;

    
});
document.getElementById('output').style.display='none';
