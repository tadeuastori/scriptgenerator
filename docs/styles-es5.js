(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\r\n     overflow-y: scroll; \r\n}\r\n\r\n\r\nbody .divBody{\r\nmargin-top: 75px;\r\n}\r\n\r\n\r\nheader{\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 30px;\r\n    position: fixed;\r\n    text-align: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    z-index: 999;\r\n}\r\n\r\n\r\nheader .divHeader{\r\n    border-bottom: 1px black solid;\r\n    border-left: 1px transparent solid;\r\n    border-right: 1px transparent solid;    \r\n    width: 100%;\r\n    height: 75px;\r\n    margin: 0px;\r\n    padding: 0px 20px;\r\n    -webkit-border-bottom-right-radius: 20px;\r\n    -webkit-border-bottom-left-radius: 20px;\r\n    -moz-border-radius-bottomright: 20px;\r\n    -moz-border-radius-bottomleft: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    border-bottom-left-radius: 20px;    \r\n    letter-spacing: 10px;  \r\n    color: #000000;\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n}\r\n\r\n\r\n.titleHeader{\r\n    height: 75px;  \r\n}\r\n\r\n\r\n.titleHeader .imgTitle{\r\n    margin-top: -35px;\r\n    margin-right: 10px;\r\n    width: 64px;\r\n    height: 64px;\r\n}\r\n\r\n\r\n.titleHeader .firstLetter{\r\n    font-size: 50px;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n}\r\n\r\n\r\n.titleHeader .nextLetters{\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n\r\nheader .titleHeader .divGithub{\r\n    margin-right: 20px; \r\n    margin-top: 1px;\r\n    z-index: 99999999999999;\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n    .titleHeader{\r\n        letter-spacing: 0px;    \r\n    }\r\n\r\n    .titleHeader .nextLetters{\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\nfooter{    \r\n    width: 100%;\r\n    height: 30px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    text-align: center;\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\nfooter .divFooter{\r\n    background-color: #E9ECEF; \r\n    border-top: 1px black solid;\r\n    border-left: 1px transparent solid;\r\n    border-right: 1px transparent solid;    \r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    -webkit-border-top-left-radius: 20px;\r\n    -webkit-border-top-right-radius: 20px;\r\n    -moz-border-radius-topleft: 20px;\r\n    -moz-border-radius-topright: 20px;\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n}\r\n\r\n\r\nfooter .imgFooter{\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n\r\nfooter a{\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n}\r\n\r\n\r\n.sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 75px;\r\n    z-index: 100;\r\n    background-color: #f5f8fa; \r\n    border-top: none;\r\n    height: 70px;\r\n    border-bottom: 1px black solid;\r\n    border-left: 1px black solid;\r\n    border-right: 1px black solid;    \r\n    -webkit-border-bottom-right-radius: 20px;\r\n    -webkit-border-bottom-left-radius: 20px;\r\n    -moz-border-radius-bottomright: 20px;\r\n    -moz-border-radius-bottomleft: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n  }\r\n\r\n\r\n#button {\r\n    display: inline-block;\r\n    background-color: #169DB2;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    transition: background-color .3s, \r\n      opacity .5s, visibility .5s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 1000;\r\n  }\r\n\r\n\r\n#button::after {\r\n    content: \"\\f077\";\r\n    font-family: FontAwesome;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 2em;\r\n    line-height: 50px;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n#button:hover {\r\n    cursor: pointer;\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n  }\r\n\r\n\r\n#button:active {\r\n    background-color: #555;\r\n  }\r\n\r\n\r\n#button.show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssa0JBQWtCO0FBQ3ZCOzs7QUFHQTtBQUNBLGdCQUFnQjtBQUNoQjs7O0FBRUE7SUFDSSxNQUFNO0lBQ04sZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4Qyx1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsNEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNFQUFzRTtBQUMxRTs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0RBQWdEO0FBQ3BEOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4Qyx1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDOzs7QUFLQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYO2lDQUM2QjtJQUM3QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7OztBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7QUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG59XHJcblxyXG5cclxuYm9keSAuZGl2Qm9keXtcclxubWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG5oZWFkZXIgLmRpdkhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCB0cmFuc3BhcmVudCBzb2xpZDsgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAyMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7ICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7ICBcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuXHJcbi50aXRsZUhlYWRlcntcclxuICAgIGhlaWdodDogNzVweDsgIFxyXG59XHJcblxyXG4udGl0bGVIZWFkZXIgLmltZ1RpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRpdGxlSGVhZGVyIC5maXJzdExldHRlcntcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZUhlYWRlciAubmV4dExldHRlcnN7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhlYWRlciAudGl0bGVIZWFkZXIgLmRpdkdpdGh1YntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAudGl0bGVIZWFkZXJ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlSGVhZGVyIC5uZXh0TGV0dGVyc3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZm9vdGVyeyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIC5kaXZGb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGOyBcclxuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCB0cmFuc3BhcmVudCBzb2xpZDsgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAyMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuXHJcbmZvb3RlciAuaW1nRm9vdGVye1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbn1cclxuXHJcbmZvb3RlciBhe1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuXHJcblxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDc1cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhOyBcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggYmxhY2sgc29saWQ7ICAgIFxyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuICAjYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjlEQjI7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MsIFxyXG4gICAgICBvcGFjaXR5IC41cywgdmlzaWJpbGl0eSAuNXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbiAgI2J1dHRvbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGYwNzdcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNidXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgfVxyXG4gICNidXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gICNidXR0b24uc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projetos\ScriptGenerator\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map