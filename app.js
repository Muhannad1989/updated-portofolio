$(document).ready(function() {
  // $('.xxx').focusin(function() {
  //   $(this)
  //     .siblings()
  //     .css({ top: '-25px', left: '220px', 'font-size': '15px' });
  // });

  // $('.xxx').focusout(function() {
  //   if (this.value == '') {
  //     $(this)
  //       .siblings()
  //       .css({ top: '13px', left: '220px', 'font-size': '20px' });
  //   }
  // });

  /////////////////////treining/////////////////////////////////////

  // Run function on  order using callback and setTimeout
  // use an new function within created set time out

  // create set time out
  const setTime = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.text1').addClass('animation'));
      }, 0),
    );
  };

  const setTime1 = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.text1').addClass('animation2'));
      }, 3500),
    );
  };

  const setTime2 = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.text1').addClass('animation3'));
      }, 3500),
    );
  };

  const setTime3 = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.layer').addClass('scale'));
      }, 3500),
    );
  };

  const hide = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve(
          $('.layer').addClass('hide'),
          $('.back').addClass('show moveText'),
          $('.my-page').addClass('show'),
        );
      }, 1000),
    );
  };

  let asyncCall = async () => {
    await setTime();
    // await setTime1();
    // await setTime2();
    await setTime3();
    await hide();
  };

  asyncCall();

  // setTimeout(function() {
  //   runAnimation();
  // }, 3000);

  // demo
  // $( "#book" ).animate({
  //   opacity: 0.25,
  //   left: "+=50",
  //   height: "toggle"
  // }, 5000, function() {
  //   // Animation complete.
  // });

  // });
  // let x = 5;
  // let color = 'white';
  // if (x > 5) {
  //   color = 'red';
  // } else {
  //   color = 'blue';
  // }
  // function run() {
  //   $('body')
  //     .css('background-color', '#000')
  //     .css('color', color);
  // }
  // $('button').click(function() {
  //   run();
  //   let xx = prompt('write "good"');
  //   if (xx == 'good') {
  //     alert('done');
  //   }
  // });
});
