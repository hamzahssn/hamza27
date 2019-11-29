function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
   }
   
   var str = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs';
   console.log(count(str,'j'))