var index = 0;

function text() {
    document.addEventListener('click', play);
    function play() {
        switch (index) {
            case 0:               
                document.getElementById("text").innerHTML = "Tôi mắc phải căn bệnh nếu không có ai nhấp vào mình thì chẳng thể nói chuyện được."
                break;
            case 1:
                document.getElementById("text").innerHTML = "Nói về tôi đủ rồi. Dạo dịch cũng lắng xuống cơ mà cậu khỏe chớ?";              
                break;
            case 2:
                document.getElementById("text").innerHTML = "Hỏi vui chứ tôi chả quan tâm đâu, hehe."
                break
            case 3:
                document.getElementById("text").innerHTML = "Ấy mà này, đố cậu biết tại sao trời tối vầy mà chả có đèn đóm gì?"
                break;
            case 4:
                document.getElementById("text").innerHTML = "Không tính cái lửa trại này."
                break;
            case 5:
                document.getElementById("text").innerHTML = "Ừa thì vì hôm nay là một ngày vô cùng đặc biệt!"
                break;
            case 6:
                document.getElementById("text").innerHTML = "Đặc biệt chỗ nào hả? Ừ thì đợi chút..."
                break;
            case 7:
                document.getElementById("text").innerHTML = "Con Mụp! Mụp ơi! Mụp ơi là Mụp!"
                break;
            case 8:
                document.getElementById("gura1").style.display = "flex"
                document.getElementById("text").innerHTML = "Con Mụp đây rồi! Giờ thì cậu chọt chọt con bé để nhỏ đánh trống đi."
                break;
        }
        index++;
        
    }
}