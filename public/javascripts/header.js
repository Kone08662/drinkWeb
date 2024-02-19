//下拉選單自動顯示
$(document).ready(function () {// 使用 jQuery 監聽滑鼠懸停事件
  $('.nav-item.dropdown').hover(
    function () {
      // 滑鼠懸停時顯示下拉選單
      $(this).find('.dropdown-menu').stop(true, true).delay(30).fadeIn(80);
    },
    function () {
      // 滑鼠離開時隱藏下拉選單
      $(this).find('.dropdown-menu').stop(true, true).delay(30).fadeOut(80);
    }
  );
});

