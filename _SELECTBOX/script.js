var area = [
    {
    "province": "Hà Nội",
    "district": ["Quận Ba Đình", "Quận Cầu Giấy", "Quận Thanh Xuân"]
    },
    {
    "province": "TP. HCM",
    "district": ["Quận 1", "Quận 2", "Quận 3"]
    },
    {
    "province": "Bình Dương",
    "district": ["Thị xã Thuận An", "Thị xã Dĩ An", "Huyện Dầu Tiếng"]
    }
];


$(document).ready(function(){
    
    function addDistrict(arr,index){
        $("#district option").remove();
        $("#district").append('<option selected="selected">Quận huyện</option>')
        var out = "";
        for(i = 0; i<arr[index].district.length; i++) {
            out += '<option>' + arr[index].district[i] + '</option>';
        }
        $("#district").append(out);
    }
    
    
    $("#province").change(function(){
        for(i=0; i<area.length; i++){
            if ($("#province option:selected").text() == area[i].province) {
                addDistrict(area,i);
            }
        }
    });
    
});
