

//hecho por Franklin Josué Córdova Fuentes CF17002
function xf(f){
    f=f+"=0";
    return f;
}
function gx(f){
    var item=1;
    var ad=" ";
    var g;
    var c;
    
    while(f.indexOf("x")>=0){
        f=f.replace("x","X");
    }
    var pos=f.indexOf("^");
    if(pos>=0){
        var n;
        var s=" ";
        c=f.substring(pos+2,f.indexOf('='));
        c=c.replace("X","*X");
        if(pos>1){
            //alert(pos);
            if(pos==2){
                if(f.charAt(0)=='-'){
                    s='+';
                    n="1*";
                }else{
                    n=f.charAt(0)+"*";
                }
                
            }else{
                var start;
                var ev=false;
                start=f.indexOf("+");
                if(start<pos-1 && start>=0){
                    c+="+"+f.substring(0,f.indexOf("+"));
                    ev=true;
                    //alert("si");
                }else{
                    start=f.indexOf("-");
                    if(start<pos-1 && start>=0){
                        //alert("lol");
                        if(start==0){

                        }else{
                            c+="+"+f.substring(0,f.indexOf("-"));
                        }
                        s='+';
                        ev=true;
                        
                    }
                }
                
                if(ev==true){
                    //alert(start);
                    n=f.substring(start+1,pos-1)+"*";
                }else{
                    //alert(start+"NO");
                    if(s=='+'){
                        n="1*"
                    }else{
                         n=f.substring(0,pos-1)+"*";
                         
                    }
                   
                }
            //    alert(n);
            }
            
        }else{
            n="1*";
        }
        //alert(n);
        var g3,g4="none";

        if(f.charAt(pos+1)=='3'){
            if(s=='+'){
                g="X=+(("+c+")/"+n+"X^2)";
                g3="X=+(("+c+")/"+n+")^1/3";
                g4="X=+(("+c+")/"+n+"X)^1/2";
            }else{
                g="X=(("+c+")/"+n+"X^2)";
                g3="X=(("+c+")/"+n+")^1/3";
                g4="X=(("+c+")/"+n+"X)^1/2";
            }
            
        }else if(f.charAt(pos+1)=='2'){
            if(s=='+'){
                g="X=+(("+c+")/"+n+"X)";
                g3="X=+(("+c+")/"+n+")^1/2";
            }else{
                g="X=(("+c+")/"+n+"X)";
                g3="X=(("+c+")/"+n+")^1/2";
            }
            
        }
        
        
        while(g.indexOf('-+')>=0){
            g=g.replace('-+','-');
            g3=g3.replace('-+','-');
            if(g4!="none"){
                g4=g4.replace('-+','-');
            }
        }
        while(g.indexOf('+-')>=0){
            g=g.replace('+-','-');
            g3=g3.replace('+-','-');
            if(g4!="none"){
                g4=g4.replace('+-','-');
            }
        }
        while(g.indexOf('--')>=0){
            g=g.replace('--','+');
            g3=g3.replace('--','+');
            if(g4!="none"){
                g4=g4.replace('--','+');
            }
        }
        while(g.indexOf('++')>=0){
            g=g.replace('++','+');
            g3=g3.replace('++','+');
            if(g4!="none"){
                g4=g4.replace('++','+');
            }
        }
        while(g.indexOf('+')>=0){
            g=g.replace('+','|');
            g3=g3.replace('+','|');
            if(g4!="none"){
                g4=g4.replace('+','|');
            }
        }
        while(g.indexOf('-')>=0){
            g=g.replace('-','°');
            g3=g3.replace('-','°');
            if(g4!="none"){
                g4=g4.replace('-','°');
            }
        }
        while(g.indexOf('|')>=0){
            g=g.replace('|','-');
            g3=g3.replace('|','-');
            if(g4!="none"){
                g4=g4.replace('|','-');
            }
        }
        while(g.indexOf('°')>=0){
            g=g.replace('°','+');
            g3=g3.replace('°','+');
            if(g4!="none"){
                g4=g4.replace('°','+');
            }
        }
        while(g.indexOf('(+')>=0){
            g=g.replace('(+','(');
            g3=g3.replace('(+','(');
            if(g4!="none"){
                g4=g4.replace('(+','(');
            }
        }
        while(g.indexOf('*)')>=0 || g3.indexOf('*)')>=0 ||g4.indexOf('*)')>=0 ){

            g=g.replace('*)',')');
            g3=g3.replace('*)',')');
            if(g4!="none"){
                g4=g4.replace('*)',')');
            }
        }
        while(g.indexOf('(*')>=0 || g3.indexOf('(*')>=0 ||g4.indexOf('(*')>=0 ){

            g=g.replace('(*','(');
            g3=g3.replace('(*','(');
            if(g4!="none"){
                g4=g4.replace('(*','(');
            }
        }
        while(g.indexOf('[+')>=0){
            g=g.replace('[+','[-');
            g3=g3.replace('[+','[-');
            if(g4!="none"){
                g4=g4.replace('[+','[-');
            }
        }
        while(g.indexOf('=+')>=0){
            g=g.replace('=+','=');
            g3=g3.replace('=+','=');
            if(g4!="none"){
                g4=g4.replace('=+','=');
            }
        }
        while(g.indexOf('-*')>=0){
            g=g.replace('-*','-');
            g3=g3.replace('-*','-');
            if(g4!="none"){
                g4=g4.replace('-*','-');
            }
        }
        var g2="g(x)"+g.substring(g.indexOf("="));   

        ad+="<input checked class='form-check-input' type='radio' name='Options' id='Radio"+item+"' value='"+g+"'>";
        ad+="<label class='form-check-label' for='Radio"+item+"'>"+g2+"</label>";
        item++;
        g2="g(x)"+g3.substring(g3.indexOf("="));   
        ad+="<input checked class='form-check-input' type='radio' name='Options' id='Radio"+item+"' value='"+g3+"'>";
        ad+="<label class='form-check-label' for='Radio"+item+"'>"+g2+"</label>";
        item++;
        if(g4!="none"){
            g2="g(x)"+g4.substring(g4.indexOf("="));   
            ad+="<input checked class='form-check-input' type='radio' name='Options' id='Radio"+item+"' value='"+g4+"'>";
            ad+="<label class='form-check-label' for='Radio"+item+"'>"+g2+"</label>";
            item++;
        }

    }
    pos=f.indexOf("X+");
    if(pos<0){
        pos=f.indexOf("X-");
    }
    if(pos>=0){
        var n;
        var s=" ";
        c=f.substring(pos+1,f.indexOf('='));
        c=c.replace("X","*X");
        if(pos>0){
            if(pos==1){
                n=f.charAt(0);
            }else{
                var start;
                var ev=false;
                start=f.indexOf("+")
                if(start<pos-1 && start>=0){
                    c+="+"+f.substring(0,f.indexOf("+"));
                    ev=true;
                 //   alert("si");
                }else{
                    start=f.indexOf("-")
                    if(start<pos-1 && start>=0){
                        if(start!=0){
                            c+="+"+f.substring(0,f.indexOf("-"));
                        }
                        
                        s='+';
                        if(f.indexOf("-")==0){
                            ev=false;
                        }else{
                            ev=true;
                        }
                    }
                }
                
                if(ev==true){
                   // alert(start);
                    n=f.substring(start+1,pos);
                }else{
                    
                    n=f.substring(0,pos);
                    //alert(n);
                }
                
            }
            if(s=='+'){
                g="X=+(("+c+")/"+n+")";
            }else{
                g="X=(("+c+")/"+n+")";
            }
            
        }else{
            g="X="+c;
        }
        while(g.indexOf('-+')>=0){
            g=g.replace('-+','-');
        }
        while(g.indexOf('+-')>=0){
            g=g.replace('+-','-');
        }
        while(g.indexOf('--')>=0){
            g=g.replace('--','+');
        }
        while(g.indexOf('++')>=0){
            g=g.replace('++','+');
        }
        while(g.indexOf('+')>=0){
            g=g.replace('+','|');
        }
        while(g.indexOf('-')>=0){
            g=g.replace('-','°');
        }
        while(g.indexOf('|')>=0){
            g=g.replace('|','-');
        }
        while(g.indexOf('°')>=0){
            g=g.replace('°','+');
        }
        while(g.indexOf('(+')>=0){
            g=g.replace('(+','(');
        }
        while(g.indexOf('*)')>=0){
            g=g.replace('*)',')');
        }
        while(g.indexOf('(*')>=0){
            g=g.replace('(*','(');
        }
        while(g.indexOf('[+')>=0){
            g=g.replace('[+','[-');
        }
        while(g.indexOf('=+')>=0){
            g=g.replace('=+','=');
        }
        while(g.indexOf('-*')>=0){
            g=g.replace('-*','-');
        }
        /*while(g.indexOf('X]')>=0){
            g=g.replace('X]','*X]');
        }*/
        var g2="g(x)"+g.substring(g.indexOf("="));        

        ad+="<input checked class='form-check-input' type='radio' name='Options' id='Radio"+item+"' value='"+g+"'>";
        ad+="<label class='form-check-label' for='Radio"+item+"'>"+g2+"</label>";
        item++;
    }
    //alert(ad);
    var option = document.getElementById("G(X)");
    option.innerHTML=ad;

}

function fn(f,x){
    var sol;
    g = f.substring(f.indexOf('=')+1);
    if(g.indexOf("/")>=0){
        g=g.replace("/","/(");
        g=g+")";
    }
    
    
    sol = g.replace("X^3", "(X*X*X)");
    sol = sol.replace("X^2","(X*X)");
    while(sol.indexOf('X')>=0){
        sol = sol.replace('X',x);
    }
    

    //alert(sol);
    var result;
    if(sol.indexOf("sen(")>=0){
        var st = sol.indexOf("sen(");
        var rs = sol.substring(st+4,sol.indexOf(")",st));
        var rst = eval("1*"+rs);
        var valor = Math.sin(rst);
        var subs = sol.replace("sen("+rs+")",valor);
        sol = subs;
    }
    if(sol.indexOf("cos(")>=0){
        var st = sol.indexOf("cos(");
        var rs = sol.substring(st+4,sol.indexOf(")",st));
        var rst = eval("1*"+rs);
        var valor = Math.cos(rst);
        var subs = sol.replace("cos("+rs+")",valor);
        sol = subs;
    }
    if(sol.indexOf("tan(")>=0){
        var st = sol.indexOf("tan(");
        var rs = sol.substring(st+4,sol.indexOf(")",st));
        var rst = eval("1*"+rs);
        var valor = Math.tan(rst);
        var subs = sol.replace("tan("+rs+")",valor);
        sol = subs;
    }
    if(sol.indexOf("e[")>=0){
        var st = sol.indexOf("e[");
        var rs = sol.substring(st+2,sol.indexOf("]",st));
        var rst = eval("1*"+rs);
        var valor = Math.exp(rst);
        var subs = sol.replace("e["+rs+"]",valor);
        //alert(subs);
        sol = subs;
    }
    if(sol.indexOf("^1/2")>=0){
        var rs = sol.substring(1,sol.indexOf("^1/2"));
        //alert(rs);
        result = eval(rs);
        result = Math.sqrt(result);
        return result;
    }else if(sol.indexOf("^1/3")>=0){
        var rs = sol.substring(1,sol.indexOf("^1/3"));
        //alert(rs);
        result = eval(rs);
        result = Math.pow(result,(1/3));
        return result;
    }else{
        result = eval(sol);
        return result;
    }

}

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    
    if(form.elements.length==1){
        val=form.elements[0].value;
        
    }else{
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }    
    }
    
    return val; // return value of checked radio or undefined if none checked
}

function calcular(){
    
    var funcion = getRadioVal( document.getElementById('G(X)'), "Options" );
    //alert(funcion);
    var x1 = document.getElementById("x1").value;

    var tex = funcion;
    //alert(fn(tex,1.5));
    var contenido = document.getElementById("contenido");
    var x = x1;
    var res= x1;
    var add=" ";
    var contador = 2;
    add+="<tr> <th scope='row'>1</th> <td>"+res+"</td></tr>";
    var ant;
    do{
        ant=x;
        x=res;
        res=fn(tex,x);
        //alert(res);
        if(res==Infinity||res==-Infinity || res==NaN || isNaN(res)){
            break;
        }
        if(x==res){
        }else{
            add+="<tr> <th scope='row'>"+contador+"</th> <td>"+res+"</td></tr>";
        }

        contador++;
        if(res==ant && contador > 4){
            res=NaN;break;
        }
    }while(x!=res);
   
    contenido.innerHTML=add;
    if(res==Infinity||res==-Infinity || res==NaN || isNaN(res)){
        alert("ERROR la funcion g(x) con x1="+x1+" NO TIENE SOLUCION");
    }else{
        alert("La RAIZ es: "+res);
    }
    
    //gx(xf(funcion));
//by:CF17002
    //document.getElementById("calc").disabled=true;

}
function comprobar(){
    var funcion = document.getElementById("funcion").value;
    gx(xf(funcion));
    document.getElementById("calc").disabled=false;
}