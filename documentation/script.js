"use strict";

class load_structure{

     constructor(video_id,config=null){

      var default_config = {
      //  title : "JYTP PLAYER",
    
      }

       try {
         
            this.video = document.getElementById(video_id);
            this.video_id = video_id;
         

           if(this.video.tagName != 'VIDEO') throw new Error(`JYTP Structure Load Error : "${video_id}" Not An Video Tag`);
           if(typeof(config) != 'object' && config != null) throw new Error(`JYTP Structure Load Error : In new JYTP(...) 2nd Parameter Must Be JSON Object`);
            this.config =  (config == null) ? default_config : {...default_config,...config};
     
        this.load_structure();

       }catch (e){
        if(e.message.includes("tagName")){
            console.error(`JYTP Structure Load Error : Cannot Find Video Tag in DOM of id "${video_id}"`);
            return false;
        }
        console.error(e.message);
       }
       
     }


load_structure = ()=>{
    try {
      let struc = `<div class="video-continer block-controls" id="video-continer">
        <div class="video-wrap">
        <video class="video" id="${this.video_id}" preload="metadata" poster="${(this.config.hasOwnProperty('thumbnail')) ? this.config.thumbnail : ''}"></video>
        </div>
        <div class="back-gr" id="back-gr">
        </div>
        <div class="back-gr b-gr" id="back-gr">
        </div>
        
        </div>`;

        this.video.outerHTML = struc;
        this.video = document.getElementById(this.video_id);  
        this.video_container = document.getElementById('video-continer'); 

    } catch (e){
      console.error(e.message);
    }
}


load_top_controls = ()=>{
  try {
        
      let code = `<div class="top-video-controls" id="top-video-controls">

      <div class="top-control">
        <div class="left-control-top" id="left-control-top">

          <p class="title">${(this.config.hasOwnProperty('title')) ? this.config.title : ''}</p>
        </div>
        <div class="right-control-top" id="right-control-top">
          <div class="msg">
            <p>JYTP PLAYER</p>
          </div>
         <div class="info">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path class="ytp-svg-fill"
              d="M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"
              id="ytp-id-2"></path>
          </svg>
         </div>
        </div>
      </div>

    </div>`;
    this.video_container.insertAdjacentHTML('beforeend',code);
    
    
  } catch (e) {
    console.log(e.message);
  }
   
}


load_mid_controls = ()=>{
  try {
        
    let code = `<div class="mid-video-controls" id="mid-video-controls">
      <div class="main-control">
        <div class="mid-left-control">
        <div class="left-skip" id="left-skip">
        <div class="seek-icon">
         <i class="fas fa-caret-left"></i>
         <i class="fas fa-caret-left"></i>
         <i class="fas fa-caret-left"></i>
        </div>
        <span class="skip-span">-10</span>
      </div>
        </div>

        <div class="mid-mid-control">

          <div class="playback-animation" id="playback-animation">
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <path
                d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z">
              </path>
            </svg>
          </div>


          <div class="spinner" id="spinner">
            <div class="spinner-container">
              <div class="spinner-rotator">
                <div class="spinner-left">
                  <div class="spinner-circle"></div>
                </div>
                <div class="spinner-right">
                  <div class="spinner-circle"></div>
                </div>
              </div>
            </div>
            <div class="spinner-message" style="display: none;">If playback doesn't begin shortly, try restarting your
              device.</div>
          </div>

        </div>

        <div class="mid-right-control">
        <div class="right-skip" id="right-skip">
        <div class="seek-icon">
         <i class="fas fa-caret-right"></i>
         <i class="fas fa-caret-right"></i>
         <i class="fas fa-caret-right"></i>
        </div>
        <span class="skip-span">+10</span>
      </div>
     </div>
        </div>
      </div>


    </div>`;

    this.video_container.insertAdjacentHTML('beforeend',code);
    
    
  } catch (e) {
    console.log(e.message);
  }
   
}


load_bottom_controls = ()=>{
  try {
        
    let code = ` <div class="bottom-video-controls" id="bottom-video-controls">
    <div class="video-progress" id="video-progress">
      <progress id="progress-bar" class="progress-bar-py" value="5" min="0"></progress>
      <input class="seek" id="seek" value="0" min="0" type="range" step="1">
      <div class="seek-tooltip" id="seek-tooltip">00:00</div>
    </div>
    <div class="bottom-control">
      <div class="left-control">
        <a class="prev-button con-button" style="display: none;">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path class="svg-fill" d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z" id="id-10"></path>
          </svg>
        </a>
        <a class="play-button con-button" id="play-button">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path class="" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="play-svg"></path>
          </svg>
        </a>
        <a class="next-button con-button" style="display: none;">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path class="svg-fill" d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" id="id-12">
            </path>
          </svg>
        </a>
        <a class="mute-button con-button" id="mute-button">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path class="svg-fill"
              d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
              id="id-14"></path>
          </svg>
        </a>
        <a class="volume-button con-button">
          <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01">
        </a>
        <div class="time-display">
          <span class="current-time" id="current-time">00:00</span>
          <span class="seprator"> / </span>
          <span class="duration-time" id="duration-time">--:--</span>
        </div>


       
      </div>

      <div class="right-control">
        <a class="caption-button con-button" id="caption-button" style="display: none;">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path
              d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z">
            </path>
          </svg>
          <span></span>
        </a>

        <a class="setting-button con-button" id="setting-button">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path
              d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"
              id="id-18"></path>
          </svg>
        </a>

        <a class="pip-button con-button" id="pip-button">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <path
              d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"
              id="id-20"></path>
          </svg>
        </a>

        <a class="fullscreen-button con-button" id="fullscreen-button">
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <g class="fullscreen-button-corner-0">
              <path class="svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="id-6"></path>
            </g>
            <g class="fullscreen-button-corner-1">
              <path class="svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="id-7"></path>
            </g>
            <g class="fullscreen-button-corner-2">
              <path class="svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="id-8"></path>
            </g>
            <g class="fullscreen-button-corner-3">
              <path class="svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="id-9"></path>
            </g>
          </svg>
          <svg style="display:none;" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <g class="fullscreen-button-corner-2">
              <use class="svg-shadow" xlink:href="#id-51"></use>
              <path class="svg-fill" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z" id="id-51"></path>
            </g>
            <g class="fullscreen-button-corner-3">
              <use class="svg-shadow" xlink:href="#id-52"></use>
              <path class="svg-fill" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z" id="id-52"></path>
            </g>
            <g class="fullscreen-button-corner-0">
              <use class="svg-shadow" xlink:href="#id-53"></use>
              <path class="svg-fill" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z" id="id-53"></path>
            </g>
            <g class="fullscreen-button-corner-1">
              <use class="svg-shadow" xlink:href="#id-54"></use>
              <path class="svg-fill" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" id="id-54"></path>
            </g>
          </svg>
        </a>



      </div>
    </div>
  </div>`;

    this.video_container.insertAdjacentHTML('beforeend',code);
    
    
  } catch (e) {
    console.log(e.message);
  }
   
}


load_setting_menu = ()=>{
  try {
        
    let code = `<div class="settings-menu" id="settings-menu">
    <div class="panel" id="panel">
      <div class="panel-menu main-menu" id="main-menu">

        <div class="menuitem" id="annotations">
          <div class="menuitem-label">Annotations</div>
          <div class="menuitem-content"> <input id="switch" type="checkbox" class="switch" checked></input></div>
        </div>

       

      </div>
    </div>
  </div>`;

    this.video_container.insertAdjacentHTML('beforeend',code);
    this.main_menu = document.getElementById('main-menu');
    this.panel = document.getElementById('panel');
    
  } catch (e) {
    console.log(e.message);
  }
   
}





load_document_var = ()=>{

  this.seek = document.getElementById('seek');
  this.progressBar = document.getElementById('progress-bar');
  this.progress = document.getElementById('video-progress');  
  this.currentTime = document.getElementById('current-time');
  this.durationTime = document.getElementById('duration-time');
  this.volume = document.getElementById('volume');
  this.spinner = document.getElementById('spinner');
  this.animation_playback = document.getElementById('playback-animation');
  this.top_video_controls = document.getElementById('top-video-controls');
  this.left_control_top = document.getElementById('left-control-top');
  this.right_control_top = document.getElementById('right-control-top');
  this.bottom_controls = document.getElementById('bottom-video-controls');
  this.setting_button = document.getElementById('setting-button');
  this.setting_menu = document.getElementById('settings-menu');
  this.play_button = document.getElementById('play-button');
  this.mute_button = document.getElementById('mute-button');
  this.fullscreen_button = document.getElementById('fullscreen-button');
  this.seek_tooltip = document.getElementById('seek-tooltip');
  this.pip_button = document.getElementById('pip-button');
  this.switch = document.getElementById('switch');
  this.annotations = document.getElementById('annotations');
  this.right_skip = document.getElementById('right-skip');
  this.left_skip = document.getElementById('left-skip');


}


}




class methods extends load_structure{

  on_initial_meta_data = () =>{

    const videoDuration = Math.round(this.video.duration);
    this.seek.setAttribute('max', videoDuration);
    this.progressBar.setAttribute('max', videoDuration);
    const time = this.formatTime(videoDuration);
    let time_str = (time.hour != '00') ? `${time.hour}:${time.minutes}:${time.seconds}` : `${time.minutes}:${time.seconds}`;
    this.durationTime.innerText = time_str;
    
  }

  on_buffer_load = () =>{

      if (this.video.duration > 0) {
        for (let i = 0; i < this.video.buffered.length; i++) {
              if (this.video.buffered.start(this.video.buffered.length - 1 - i) < this.video.currentTime) {
                  let load = Math.floor(this.video.buffered.end(this.video.buffered.length-1-i));
                  this.progressBar.value = load;
                  break;
              }
          }
      }

  }

  on_seek_progress = () =>{

      let value = Math.floor(this.video.currentTime);
      this.seek.value = value;
      value = (value-this.seek.min)/(this.seek.max-this.seek.min)*100;
      this.seek.style.background = 'linear-gradient(to right,#ff0000 ' + (value) + '%, transparent ' + (value) + '%)';

  }

  on_seek_input = (event) =>{

        const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
        this.video.currentTime = skipTo;
        this.seek.value = skipTo;
        let value = (skipTo-this.seek.min)/(this.seek.max-this.seek.min)*100;
        this.seek.style.background = 'linear-gradient(to right,#ff0000 ' + value + '%, transparent ' + value + '%)';


        this.spinner.style.display = null;
        if(!this.progress.classList.contains('video-progress-hover')){
            this.progress.classList.add('video-progress-hover');
            setTimeout(() => {
                this.progress.classList.remove('video-progress-hover');
            },1000);
        }


        const time = this.formatTime(skipTo);
        let time_str = (time.hour != '00') ? `${time.hour}:${time.minutes}:${time.seconds}` : `${time.minutes}:${time.seconds}`;
        this.seek_tooltip.innerText = time_str;
        let left =   (skipTo*event.target.clientWidth)/event.target.getAttribute('max');
        this.seek_tooltip.style.left = left -(this.seek_tooltip.offsetWidth/2) + 'px';

  }

  on_video_tupdate = () =>{

    const time = this.formatTime(Math.round(this.video.currentTime));
    let time_str = (time.hour != '00') ? `${time.hour}:${time.minutes}:${time.seconds}` : `${time.minutes}:${time.seconds}`;
    this.currentTime.innerText = time_str;
      
    if(!this.checkis_hover(this.bottom_controls) 
      && !this.checkis_hover(this.left_control_top) 
      && this.timeout_hide == null 
      && !this.setting_button.querySelector('svg').classList.contains('setting-rotate')   
      && this.video_container.classList.contains('video-continer-hover')){

      clearTimeout(this.timeout_hide);
      this.timeout_hide = setTimeout(() => {
          if(!this.checkis_hover(this.bottom_controls) 
          && this.video_container.classList.contains('video-continer-hover') 
          &&!this.checkis_hover(this.left_control_top) 
          && !this.setting_button.querySelector('svg').classList.contains('setting-rotate') 
          && !this.video.paused){

            this.remove_controls();

          }
            this.timeout_hide = null;
        }, 4000);
    }  


  }

  on_progress_hover = () =>{
    if(!this.progress.classList.contains('video-progress-hover')){
      this.progress.classList.add('video-progress-hover');
  }
  }

  on_progress_out_hover = () =>{
    this.progress.classList.remove('video-progress-hover');
  }

  on_container_hover = () =>{
    if(!this.video_container.classList.contains('video-continer-hover') && !window.matchMedia("(any-hover: none)").matches){
      this.add_controls();
     }
  }

  on_container_out_hover = () =>{
    if(!this.video.paused && !window.matchMedia("(any-hover: none)").matches && !this.setting_button.querySelector('svg').classList.contains('setting-rotate')){
        this.remove_controls();
    }
  }

  on_container_move_hover = () =>{
    if(window.matchMedia("(any-hover: none)").matches && !this.checkis_hover(this.bottom_controls) && !this.checkis_hover(this.setting_menu)) {

     // (this.video_container.classList.contains('video-continer-hover')) ? this.remove_controls() :  this.add_controls();

     }else{
 
      this.add_controls();

     }

  }



  on_container_click = (e)=>{
    
    this.dbl_click++;
    if(this.dbl_click == 2){
    if(e.timeStamp-this.t <= 230){
      clearTimeout(this.timer);
      if(this.video_container.offsetWidth/2 > e.clientX){
        this.on_left_forward();
      }else{
        this.on_right_forward();
      }
      //(this.click_container_callback == 10) ? this.on_right_forward() : this.on_left_forward();
      // console.log(e.clientX);
      // console.log(this.get_property(this.video_container));
      // console.log(this.video_container.offsetWidth);
    }
      this.dbl_click = 0;
      return;
    }

    this.t = e.timeStamp;

    this.timer = setTimeout(() => {
      //console.log("no-double click");
      this.dbl_click = 0;

      if(window.matchMedia("(any-hover: none)").matches && !this.checkis_hover(this.bottom_controls) && !this.checkis_hover(this.setting_menu)) {
        (this.video_container.classList.contains('video-continer-hover')) ? this.remove_controls() :  this.add_controls();
      }


    },228);

    if(!this.checkis_hover(this.setting_button) && !this.checkis_hover(this.setting_menu)){
      this.remove_setting_menu();
      if(!window.matchMedia("(any-hover: none)").matches && !this.checkis_hover(this.bottom_controls)){
        this.toggle_video();
      }
    }
    
    if(this.video_container.classList.contains('block-controls')){
          this.on_play_mid_button();
    }




 

  }

  on_video_waiting =()=>{
    this.spinner.style.display = 'block';
  }

  on_video_canplay = ()=>{
    this.spinner.style.display = 'none';
    
  }

  on_play = ()=>{
    this.play_button.querySelector('svg > path').setAttribute('d','M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z');
    this.spinner.style.display = 'none';
    this.animation_playback.querySelector('svg > path').setAttribute('d','M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z');
    this.animatePlayback();
    this.video_container.classList.remove('block-controls');
    this.animation_playback.style.opacity = 0;
    this.setting_menu.style.bottom = parseFloat(this.get_property(this.bottom_controls).height) + 18 + 'px';
    this.msg_resume();
  }

  on_pause = ()=>{
    this.play_button.querySelector('svg > path').setAttribute('d','M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z');
    this.add_controls();
    this.animation_playback.querySelector('svg > path').setAttribute('d','M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z');
    this.animatePlayback();
    this.setting_menu.style.bottom = parseFloat(this.get_property(this.bottom_controls).height) + 18 + 'px';
    this.msg_pause();
  }

  on_setting_click = ()=>{

    if(this.setting_button.querySelector('svg').classList.contains('setting-rotate')){
      this.remove_setting_menu();
    }else{
      this.show_setting_menu();
    }
  }

  on_volume_change = ()=>{
    let icon = this.mute_button.querySelector('svg > path');

    if (this.video.muted || this.video.volume === 0) {
           icon.setAttribute('d','m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z');
    } else if (this.video.volume > 0 && this.video.volume <= 0.5) {
           icon.setAttribute('d','M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z');
    } else {
            icon.setAttribute('d','M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z');
    }


    let value = (this.volume.value-this.volume.min)/(this.volume.max-this.volume.min)*100;
    this.volume.style.background = 'linear-gradient(to right,#fff ' + (value) + '%, #ffffff44 ' + (value) + '%)';

  }

  on_volume_input = () =>{
    if (this.video.muted) {
      this.video.muted = false;
    }
    this.video.volume = this.volume.value;
  }

  on_mute_click = ()=>{
    this.video.muted = !this.video.muted;
    if (this.video.muted) {
       this.volume.value = 0;
    }else{
       this.volume.value = this.video.volume; 
    }
  }
  
  on_click_fullsceen = () =>{
    if(document.fullscreenElement){
      document.exitFullscreen();
       screen.orientation.unlock();
      }else{
        
    this.video_container.requestFullscreen({ navigationUI: "hide" });
    screen.orientation.lock('landscape');
  }
  }

  on_fullscreen_change = ()=>{
    if (document.fullscreenElement) {
      this.fullscreen_button.querySelectorAll('svg')[0].style.display = 'none';
      this.fullscreen_button.querySelectorAll('svg')[1].style.display =  null;
      
   } else {
      this.fullscreen_button.querySelectorAll('svg')[0].style.display = null;
      this.fullscreen_button.querySelectorAll('svg')[1].style.display =  'none';
     
  }

  this.media_query();
  }

  on_hover_seek = (e)=>{
    this.seek_offsetX = e.offsetX;
    const time = this.formatTime((this.video.duration*e.offsetX)/(e.target.clientWidth-2));
    let time_str = (time.hour != '00') ? `${time.hour}:${time.minutes}:${time.seconds}` : `${time.minutes}:${time.seconds}`;
    this.seek_tooltip.innerText = time_str;
    this.seek_tooltip.style.left = e.offsetX - (this.seek_tooltip.offsetWidth/2) + 'px';
  }

  on_document_load = ()=>{
  this.bottom_controls.style.display ='block';
  this.video_container.classList.remove('block-controls');
  this.setting_menu.style.bottom = parseFloat(this.get_property(this.bottom_controls).height) + 18 + 'px';
  this.bottom_controls.style.display = null;
  this.video_container.classList.add('block-controls');

  if (!('pictureInPictureEnabled' in document)) {
   this.pip_button.style.display = 'none';
  }

  }

  on_play_mid_button = ()=>{
      if(this.video.hasAttribute('src')){
       if(this.video.paused) this.video.play();
      }else{
        let trigger = (e)=>{
          if(this.video.paused) this.video.play();
           removeEventListener('loadedmetadata',trigger);
       };
       this.video.addEventListener('loadedmetadata',trigger);
       this.load_src(this.config.video_src);
  }
      

      this.animation_playback.animate([
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: "scale(1.3)",
        }
      ], {
        duration: 500,
      });
      this.animation_playback.style.opacity = 0;
      this.on_play_mid_button = ()=>{};
  }

  on_right_forward = ()=>{
    this.right_skip.style.visibility = "visible";
    this.video.currentTime = this.video.currentTime + 10;
    setTimeout(() => {
      this.right_skip.style.visibility = "hidden";
    },500);
  }

  on_left_forward = ()=>{
    this.left_skip.style.visibility = "visible";
    this.video.currentTime = this.video.currentTime - 10;
    setTimeout(() => {
      this.left_skip.style.visibility = "hidden";
    },800);
  }

  pip_toggle = async ()=>{
      try {
        if (this.video !== document.pictureInPictureElement) {
          await this.video.requestPictureInPicture();
        } else {
          await document.exitPictureInPicture();
        }
      } catch (error) {
        console.error(error);
      }

  }

  switch_toggle = (e)=>{
  if(e.target.getAttribute('id') === 'annotations' && this.checkis_hover(this.switch)) return;

  if(this.switch.checked){
    this.switch.checked = false;
   this.top_video_controls.style.display = 'none';
    return;
  }

  this.switch.checked = true;
  this.top_video_controls.style.display = null;
  }

  add_controls =()=>{
    clearTimeout(this.hover);
    this.bottom_controls.style.display = 'block';
    this.left_control_top.style.display = 'flex';
    this.left_control_top.style.opacity = '1';
    this.left_control_top.style.transform = null;
    this.video_container.classList.add('video-continer-hover');
  }

  remove_controls = ()=>{

   this.video_container.classList.remove('video-continer-hover');
   this.left_control_top.style.transform = 'translateY(-200%)';
   this.left_control_top.style.opacity = '0';

   this.hover = setTimeout(() => {
      this.bottom_controls.style.display = 'none';
      this.left_control_top.style.display = 'none';
      this.hover = null;
    },200);

  }
  
  
  toggle_video = ()=>{
    (this.video.paused) ? this.video.play() : this.video.pause();
  }
  
  show_setting_menu = ()=>{
  const el = this.setting_button.querySelector('svg');
  this.setting_menu.style.display = 'flex';
  el.classList.add('setting-rotate');
  }

  remove_setting_menu = ()=>{
    this.setting_menu.style.display = 'none';
    this.setting_button.querySelector('svg').classList.remove('setting-rotate');
    this.close_submenu();
  }

  checkis_hover = (ele)=>{
    if(getComputedStyle(ele).getPropertyValue('--hover') == 1){
      return true;
    }
    return false;
  }

  animatePlayback = ()=>{
  
    if(!this.checkis_hover(this.bottom_controls)){
        this.animation_playback.animate([
          {
            opacity: 1,
            transform: "scale(1)",
          },
          {
            opacity: 0,
            transform: "scale(1.3)",
          }
        ], {
          duration: 500,
        });
      }
  }


  load_src = (src=null)=>{
    if(src != null) this.config.video_src = src;
    this.spinner.style.display = 'block';
    this.video.src = this.config.video_src;
    this.video.load();
  }

  formatTime = (timeInSeconds) =>{

      const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
    return {
      hour :   result.substr(0,2),
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };

  }

  get_property = (ele)=>{
    let prop = window.getComputedStyle(ele);
    let wid = ele.getBoundingClientRect().width - (parseFloat(prop.paddingRight)+parseFloat(prop.paddingLeft));
    let height = ele.getBoundingClientRect().height - (parseFloat(prop.paddingTop)+parseFloat(prop.paddingBottom));
    return {
      width : wid +'px',
      height : height+'px',
    }
  }

  media_para = (interval,info_msg) =>{
    if(typeof(interval) != 'object'){
      let temp = interval; interval = [];
      for (let i = 0; i < info_msg.length; i++){
          interval.push(temp);
      }

    }else if(interval.length != info_msg.length){
      if(interval.length > info_msg.length)
        while(interval.length > info_msg.length){
          interval.pop();
        }
        
      else
        while(interval.length < info_msg.length){
            interval.push(interval[0])
        }

    }
    
      return (!this.interval) ? interval.reverse(): interval.reverse().concat(this.interval);
  }

  push_msg = (msg,time,staytime)=>{
    if((typeof(msg) != 'object') && (typeof(staytime) != 'number')){ console.error('Parameter Passesed in push_msg(...) Should Be in Correct Format Plz See JYTP Documentation'); return;}
    // if(!this.info_msg && !this.video.paused){
    //   this.status = true; 
    //   this.start = Date.now();
    // }
    this.info_msg = (!this.info_msg) ? msg.reverse() : msg.reverse().concat(this.info_msg);

    this.interval = this.media_para(time,msg);

    this.staytime = (!staytime) ? ((!this.staytime) ? 6000: this.staytime)  : staytime;

     //console.log(this.info_msg);
    // console.log(this.interval);
    // console.log(this.staytime);
    // console.log(typeof(staytime));

   

    if(!this.timerId || this.timerId == 400){
      this.timerId = null;
      this.pop_msg =  this.info_msg.pop();
      this.remaining = this.interval.pop();
      this.settimer();
      if(!this.video.paused){
       // console.log('1 st Pushess');
        this.msg_resume();
      }
    }
  }

  settimer = ()=>{
    if(!this.status){
      return;
    }

    if(this.remaining < 0 || this.timerId ==  400){ 
    if(this.timerId == 400) this.remaining = -1;
      return;
    }


  this.timerId = setTimeout(() => {
    let ele = this.right_control_top;
    ele.style.display='flex';
    ele.querySelector('.msg > p').innerText = this.pop_msg;
    let wid = this.get_property(ele).width;
    ele.querySelector('.msg').style.display = 'none';
    let inial_wid = this.get_property(ele).width;
    ele.style.width = inial_wid;
    ele.querySelector('.msg').style.display = null;
    ele.style.opacity='1';

    setTimeout(() => {
      ele.style.width = wid;
      
      setTimeout(() => {
        ele.style.width = inial_wid;
        setTimeout(() => {
          ele.style.opacity='0';
          ele.style.display='none';
          ele.style.width = null;
          this.next_msg();
        }, 500);
      },this.staytime);


    }, 500);

    }, this.remaining);
  }

  next_msg = ()=>{
    if(!this.info_msg) return;
    if(this.info_msg.length != 0){
      this.pop_msg = this.info_msg.pop();
      this.remaining = this.interval.pop();
      this.settimer();
      return;
    }

    this.dismiss();
  }

  msg_pause = ()=>{
    if(!this.info_msg) return;
    window.clearTimeout(this.timerId);
    this.status = false;
    this.remaining -= Date.now() - this.start;

  }

  msg_resume = ()=>{
    if(!this.info_msg) return;
    this.start = Date.now();
    this.status = true;
    window.clearTimeout(this.timerId);
    this.settimer();

  }

  dismiss = ()=>{
    window.clearTimeout(this.timerId);
    this.timerId = 400;
    console.log("Timer Dismisses");
  }

  media_query  = ()=>{
    let width = this.video_container.offsetWidth;
    let orent = window.orientation;
   // console.log(width);
    if(this.video_container.classList.contains('mobile')) this.video_container.classList.remove('mobile');
    if(this.video_container.classList.contains('deskstop-fullscreen')) this.video_container.classList.remove('deskstop-fullscreen');
    if(orent == 0 && width <= 540){
      if(!this.video_container.classList.contains('mobile')) this.video_container.classList.add('mobile');
    }else if(orent == 90 && width <= 823){
      if(!this.video_container.classList.contains('mobile')) this.video_container.classList.add('mobile');
    }else if(width >= 1900){
        this.video_container.classList.add('deskstop-fullscreen');
    }
    this.setting_menu.style.bottom = parseFloat(this.get_property(this.bottom_controls).height) + 18 + 'px';

    if (!('pictureInPictureEnabled' in document)) {
      this.pip_button.style.display = 'none';
     }
  }
  
  play = ()=>{
    this.on_play_mid_button();
    if(this.video.paused) this.video.play();
  }

  pause = ()=>{
    if(!this.video.paused) this.video.pause();
  }

 bind_eventlistener = ()=>{
  this.video.addEventListener('loadedmetadata', this.on_initial_meta_data);
  this.video.addEventListener('progress', this.on_buffer_load);
  this.video.addEventListener('timeupdate', this.on_buffer_load);
  this.video.addEventListener('timeupdate', this.on_video_tupdate);
  this.video.addEventListener('timeupdate', this.on_seek_progress);
  this.video.addEventListener('waiting', this.on_video_waiting);
  this.video.addEventListener('canplay', this.on_video_canplay);
  this.video.addEventListener('play', this.on_play);
  this.video.addEventListener('pause', this.on_pause);
  this.video.addEventListener('volumechange', this.on_volume_change);

  this.seek.addEventListener('input',this.on_seek_input);
  this.seek.addEventListener('mousemove',this.on_hover_seek);

  this.volume.addEventListener('input',this.on_volume_input);

  this.video_container.addEventListener('mouseover',this.on_container_hover);
  this.video_container.addEventListener('mousemove',this.on_container_move_hover);
  this.video_container.addEventListener('mouseout',this.on_container_out_hover);
  this.video_container.addEventListener('click',this.on_container_click);
  this.video_container.addEventListener('fullscreenchange',this.on_fullscreen_change);

  this.progress.addEventListener('mouseover',this.on_progress_hover);
  this.progress.addEventListener('mouseout',this.on_progress_out_hover);

  this.play_button.addEventListener('click',this.toggle_video);
  this.setting_button.addEventListener('click',this.on_setting_click);
  this.mute_button.addEventListener('click',this.on_mute_click);
  this.fullscreen_button.addEventListener('click',this.on_click_fullsceen);
  this.pip_button.addEventListener('click',this.pip_toggle);
  this.annotations.addEventListener('click',this.switch_toggle);
  this.switch.addEventListener('change',this.switch_toggle);

 
  this.right_skip.addEventListener('click',(e)=>{
    console.log("rrr");
    this.click_container_callback = 10;
  });

  this.left_skip.addEventListener('click',(e)=>{
    console.log("lll");
    this.click_container_callback = -10;
  });

  this.animation_playback.addEventListener('click',this.on_play_mid_button);

  window.addEventListener('DOMContentLoaded',this.on_document_load);
  this.media_query();


  window.addEventListener("orientationchange", function(event) {
    this.media_query();
  });

  this.bottom_controls.style.setProperty('--hover','0');
  this.left_control_top.style.setProperty('--hover','0');
  this.setting_button.style.setProperty('--hover','0');
  this.setting_menu.style.setProperty('--hover','0');
  this.switch.style.setProperty('--hover','0');

 

 } 



}




class Custmize_Jytp extends methods{

    load_menu = ()=>{
      try {
       this.load_permanent_menu();
        for (const key in this.config.menu) {
            for (const value of this.config.menu[key]) {
              if(value.hasOwnProperty('default')){
              let code = `<div class="menuitem main-item" data-menu="${key}">
                <div class="menuitem-label">${key}</div>
                <div class="menuitem-content"><span class="sp-con">${value.name}</span>
                  <div class="aicon"></div>
                </div>
              </div>`;
    
              this.main_menu.insertAdjacentHTML('beforeend',code);
                  break;
              }
            }
        }
        this.OnMenuClick(); 
        
      } catch (e) {
        console.log(e.message);
      }
      
    }
    

    load_submenu = ()=>{

      this.submenu_html = {};


      for (const key in this.config.menu) {
        let code = `<div class="panel-menu child-menu" id="${key}">

        <div class="menuitem first-item" id="first-item" data-menu="${key}">
          <div class="aicon-rev"></div>
          <div class="menuitem-label">
            ${key}
          </div>
        </div>`;

        for (const value of this.config.menu[key]) {
            code += `<div class="menuitem"  data-value="${value.value}">
            <div class="check-icon ${(value.hasOwnProperty('default')) ? 'active':''}"></div>
            <div class="menuitem-label">
              <div><span>${value.name}</span></div>
            </div>
          </div>`;
        }
      code += `</div>`;
      this.submenu_html[key] = code;
  } 

    }
    
    load_permanent_menu = ()=>{
      let permanent_menu = {
        ['Playback speed'] : [
          {
            name: '0.25',
            value : 0.25,
          },
          {
            name: '0.50',
            value : 0.50,
          },
          {
            name: '0.75',
            value : 0.75,
          },
          {
            name: 'Normal',
            value : 1,
            default: true,
          },
          {
            name: '1.25',
            value : 1.25,
          },
          {
            name: '1.50',
            value : 1.50,
          },
          {
            name: '1.75',
            value : 1.75,
          },
          {
            name: '2',
            value : 2,
          },
    ],
    //     ['Subtitles/CC'] : [
    //       {
    //         name: 'Off',
    //         value : 0.25,
    //         default: true,
    //       },
    //       {
    //         name: 'Telegu',
    //         value : 0.25,
    //       },
    //       {
    //         name: 'English',
    //         value : 0.25,
    //       },
    //       {
    //         name: 'France',
    //         value : 0.25,
    //       },
    //       {
    //         name: 'Hindi',
    //         value : 1,
            
    //       },
          
    // ]
      }
      this.permanent_menu = Object.assign({},permanent_menu);
      this.config.menu = Object.assign(permanent_menu,this.config.menu);
      
    }

    OnMenuClick = () => {
      
      this.main_items = document.querySelectorAll('.main-item');
      this.main_items.forEach((ele)=>{

        ele.addEventListener('click',(e)=>{
          let res = {
            name :  ele.dataset.menu,
            default : ele.querySelector('.menuitem-content').innerText,
            element : ele,
            panel : ele.dataset.menu,
            type : 'menu-click'
          }

          this.callback_dispatch(res);
          this.open_submenu(res);
        });

      });

    }


    OnSubMenuClick = () => {
      this.sub_items = document.querySelectorAll('.child-menu > .menuitem');
      this.sub_items.forEach((ele)=>{

        ele.addEventListener('click',(e)=>{
          let res;
          if(ele.classList.contains('first-item')){
            res = {
              name : ele.querySelector('.menuitem-label').innerText,
              element : ele,
              panel : ele.parentNode.id,
              type : 'submenu-close'
            }
            this.close_submenu();
            this.callback_dispatch(res);
            return;
          }

          res = {
            name :  ele.querySelector('.menuitem-label').innerText,
            panel : ele.parentNode.id,
            is_default : ele.querySelector('.check-icon').classList.contains('active'),
            element : ele,
            value : ele.dataset.value,
            type : 'subitem-click'
          }

          
          if(!this.check_is_perament_menu(res) && !this.check_none_event(res)) if(this.set_subitem(res)) this.callback_dispatch(res);
          if(this.check_none_event(res) && !res.is_default) this.callback_dispatch(res);
          if(this.check_is_perament_menu(res)) this.permanent_event_listnener(res);
        });

      });
    }


    open_submenu = (res)=>{
        
      this.panel.insertAdjacentHTML('beforeend', this.submenu_html[res.name]);
      this.child_menu = document.getElementById(res.name);
      this.main_menu.style.transform='translateX(-100%)';
        
      setTimeout(() => {
          this.child_menu.style.display = 'flex';
          this.main_menu.style.display = 'none';
      }, 155);
      
      this.OnSubMenuClick();

    }


    close_submenu = ()=>{
       if(!this.child_menu) return;
       
        this.child_menu.style.transform='translateX(100%)';
        this.main_menu.style.transform=null;
        setTimeout(() => {
          this.child_menu.outerHTML = '';
          delete this.child_menu;
          this.main_menu.style.display = 'flex';
      }, 155);
    }


    addMenuEventListener = (type,callback)=>{

        switch (type) {
          case 'menu-click':
                this.menu_click_callback = (event) => callback(event);
            break;
  
          case 'subitem-click':
                this.subitem_click_callback = (event) => callback(event);
            break;
  
          case 'submenu-close':
                this.submenu_close_callback = (event) => callback(event);
            break;
        
          default:
              console.error('Invalid Callback Listener');
            break;
        }
  
    }
 


    permanent_event_listnener = (res)=>{
      switch (res.panel) {
        case 'Playback speed':
          if(this.set_subitem(res)){
            this.callback_dispatch(res);
            this.video.playbackRate = res.value;
          }
          break;
        case 'Subtitles/CC':
          if(this.set_subitem(res)) this.callback_dispatch(res);
          break;
      
        default:
          console.log('Permanent Listener Not Found');
          break;
      }
    }


    callback_dispatch =(event)=>{
      if(this.check_is_perament_menu(event)) delete event['element'];
      switch (event.type) {
        case 'menu-click':
              if(this.menu_click_callback){
                this.menu_click_callback(event);
              }
          break;

        case 'subitem-click':
              if(this.subitem_click_callback){
                this.subitem_click_callback(event);
              }
          break;

        case 'submenu-close':
              if(this.submenu_close_callback){
                this.submenu_close_callback(event);
              }
          break;
      
        default:
          console.error('Invalid Callback_Dispatch');
          break;
      }
    }

    set_subitem = (item)=>{
      if(item.element.querySelector('.check-icon').classList.contains('active')){ this.remove_setting_menu(); return false;}

       this.child_menu.querySelector('.menuitem >.active').classList.remove('active');
       item.element.querySelector('.check-icon').classList.add('active');
       this.set_subitem_json(item);
       this.main_menu.querySelector('[data-menu="'+item.panel+'"] > .menuitem-content > .sp-con').innerText = item.name;
       this.load_submenu();
       this.remove_setting_menu();
       return true;
    }
    
    set_subitem_json = (item)=>{
          for (const key in this.config.menu[item.panel]) {
            let value = this.config.menu[item.panel][key];
            if(value.hasOwnProperty('default')){
                delete this.config.menu[item.panel][key]['default'];  
            }else if(value.name === item.name){
              this.config.menu[item.panel][key]['default'] = true;
            }
        }
    } 
    
    check_is_perament_menu =(res)=>{
      return (this.permanent_menu.hasOwnProperty(res.panel))  ? true : false;
    }

    check_none_event = (res)=>{
     return (this.config.menu_none_event.includes(res.panel)) ? true : false;
    }

}

class JYTP extends Custmize_Jytp{
  constructor(vedio_id,config){
    super(vedio_id,config);

    // this.load_structure();
    // this.load_top_controls();
    // this.load_mid_controls();
    // this.load_bottom_controls();
    // this.load_setting_menu();
    // this.load_menu();



    this.load_document_var();
    this.bind_eventlistener();
  //  this.load_src('new.mp4');
    this.load_submenu();
    
    
  }
}


 var config = {
  title : 'Sweat Heart Song Famous SSR|Daughter of saif ali khan',
  thumbnail : 'https://media.webdunia.com/_media/en/img/article/2018-10/30/full/1540885921-3324.jpg',
  video_src : 'http://127.0.0.1:5500/new.mp4',

 menu_none_event : ['Quality'],

  menu : {
    Quality :[{
      name : '1080p',
      value : 1080 ,
      
    },
    {
      name : '720p',
      value : 720
    },
    {
      name : '360p',
      value : 360
    },
    {
      name : '240p',
      value : 240,
      default : true
    },
    {
      name : '144p',
      value : 144
    },
      
    ],

    Server :[
      {
        name: 'StreamTape',
        value : 1,
        default : true
      },
      {
        name: 'DoodStream',
        value : 2
      },
      {
        name: 'MyCloud',
        value : 3
      },
    ]
  } 

}


const player = new JYTP('plyr',config);

player.addMenuEventListener('menu-click',(event)=>{
  console.log(event);
});
player.addMenuEventListener('subitem-click',(event)=>{
  console.log(event);
});

let info_msg = [
  "Streaming From Streamtape.com",
  "We Don't host own Content Or Stream Data, all is from 3rd Party Service",
  "Please Donate Us to Maintain  Our Server",
  "If You Like Our Service Please Share Because Sharing is Caring",
  "You Are Wacthing Via MovieBezz",
];

player.push_msg(info_msg,15000,6000);


