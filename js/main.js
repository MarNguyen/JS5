
  document.getElementById("btnDiem").onclick = function () {
    //lấy thông tin từ user
    var Number1 = document.getElementById("Number1").value * 1;
    var Number2 = document.getElementById("Number2").value * 1;
    var Number3 = document.getElementById("Number3").value * 1;
    var khuVuc= document.getElementById("khuVuc").value * 1 ;
    var doiTuong = document.getElementById("doiTuong").value * 1 ;
    var diemChuan = document.getElementById("diemChuan").value * 1 ;
    //xu ly

    
    var diemUuTien = khuVuc + doiTuong ;
    var tinhdiemTong = Number1 + Number2 + Number3 + diemUuTien ;
    var thongBao;
    if (tinhdiemTong >= diemChuan) {
     if ((Number1 && Number2 && Number3) > 0) {
         thongBao = "Bạn đã đậu"
     } else {
         thongBao = "Bạn đã rớt . Do có điểm thi nhỏ hơn hoặc bằng 0 "
     }
    } else {
     if ((Number1 && Number2 && Number3) > 0) {
         thongBao = "Bạn đã rớt . Do điểm tổng nhỏ hơn điểm chuẩn "
     } else {
         thongBao = "Bạn đã rớt . Do điểm tổng nhỏ hơn điểm chuẩn và điểm thi nhỏ hơn hoặc bằng 0"
     }
    }
    var result = thongBao + " và được" + tinhdiemTong + "điểm"
  
    //Show kết quả
    document.getElementById("infoDiem").innerHTML = result;
  };
    //style
    document.getElementById("infoDiem").classList.add("alert-success");


    document.getElementById("btnTinhTien").onclick = function () {
        //lấy thông tin từ user
        var Names = document.getElementById("Names").value * 1;
        var Kw= document.getElementById("Kw").value * 1;
        var Money = 0;
       
        //xu ly
      if (Kw < 0) {
        alert ("Dữ Liệu không hợp lệ");
      } else {
        if (Kw >= 0 && Kw <= 50) {
            Money = 500 * Kw
        } else {
            if (Kw >50 && Kw ==100) {
                Money = 650 * Kw
            } else {
                if (Kw >100 && Kw == 200) {
                    Money = 850 * Kw
                } else {
                    if (Kw >200 && Kw == 350) {
                        Money = 1100 * Kw
                    } else {
                        Money = 1300 * Kw
                    }
                }
            }
        }
      }
      result = "Họ Tên: "+ Names + "; Tiền Điện: " + Money + "d"
      
        //Show kết quả
        document.getElementById("infoTinh").innerHTML = result;
      };
        //style
        document.getElementById("infoTinh").classList.add("alert-success");