function Mobile(pin ) {
    this.pin = Math.floor(Math.random()*100);
    this.memoryText = [];       //tin nhan dang soan
    this.memoryReceive = [];       //tin nhan trong hop thu den
    this.memorySent = [];       //tin nhan da gui
    this.checkMobile = function () {    //kiem tra trang thai dien thoai bat hay tat
        if(onOff === 0) {
            alert("Dien thoai dang tat, vui long bat dien thoai de su dung!");
        }
        if(onOff === 1) {
            alert("Dien thoai dang bat!" + "\n" + "Pin dien thoai = " + this.pin + "%");
            if (this.pin <= 20) alert("Pin yeu");
            if (this.pin === 100) alert("Pin day");
        }
    };
    let onOff = 0;
    this.onMobile = function () {       //bat dien thoai
        onOff = 1;
        alert("Dien thoai da bat!");
        return onOff;
    };
    this.offMobile = function () {      //tat dien thoai
        onOff = 0;
        alert("Dien thoai da tat!");
        return onOff;
    };

    this.charge = function () {     //sac pin
        if (this.pin <= 99)
        this.pin += 1;
        alert("Pin dien thoai = " + this.pin + "%");
        if (this.pin === 100) {
            alert("Pin da sac day, vui long tat sac pin");
        }
    }


    this.textMessenger = function () {      //soan tin nhan
        if(onOff === 1) {
            this.memoryText = [];
            let newTextMessenger = prompt("Nhap tin nhan");
            this.memoryText[0] = newTextMessenger;
            this.pin -= 1;
        }
        else alert("Vui long bat dien thoai de su dung");
    };

    this.receiverMessenger = function (memorySent) {      //nhan tin nhan
            this.memoryReceive = memorySent;
    };

    this.sendMessenger = function () {      //gui tin nhan
        if (onOff === 1) {
            if(this.memoryText.length <= 0) {
                alert(("Vui long soan tin nhan de gui"));
            }
            else
            {   let newMessenger = this.memoryText[0];
                this.memorySent.push(newMessenger);
                alert("Tin nhan da duoc gui di");
                this.memoryText = [];
            }
            this.pin -= 1;
        }
        else alert("Vui long bat dien thoai de su dung");
    };

    this.showmemoryReceive = function () {      //hop thu den
        if (onOff === 1) {
            let count = this.memoryReceive.length;
            alert("Hop thu den co " + count + " tin nhan");
            for (let i = 0; i < this.memoryReceive.length; i++) {
                let cnt = i + 1;
                alert("Tin nhan thu " + cnt + ": " + this.memoryReceive[i]);
            }
            this.pin -= 1;
        }
        else alert("Vui long bat dien thoai de su dung");
    };

    this.showMemorySent = function () {     //hop thu di
        if (onOff === 1) {
            let count = this.memorySent.length;
            alert("Hop thu di co " + count + " tin nhan");
            for (let i = 0; i < this.memorySent.length; i++) {
                let cnt = i +1;
                alert("Tin nhan thu " + cnt + ": " + this.memorySent[i]);
            }
            this.pin -= 1;
        }
        else alert("Vui long bat dien thoai de su dung");
    };

}

let iphone = new Mobile();
let nokia = new Mobile();

iphone.receiverMessenger(nokia.memorySent);
nokia.receiverMessenger(iphone.memorySent);