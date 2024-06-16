async function q() {
    
    console.log('a');
    console.log('b');

    const func1=await new Promise((res,rej)=>{
        setTimeout(()=> {
            console.log('c')
            res();
        },3000);
            
        }
    )
    const func2=await new Promise((res,rej)=>{
        setTimeout(()=> {
            console.log('d')
            res();
        },0);
            
        }
    )
    console.log('e');
}
q();

