
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playBtn = $('.btn-toggle-play');
const player = $('.player')
let playlist = $('.playlist');
const header = $('h2');
const songImg = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
let cdWidth = cd.offsetWidth;
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playList = $('.playlist')

const app = {
    //Chỉ mục bài hát hiện tại
    currentIndex: 0,
    //Trạng thái phát nhạc
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    //List bài hát
    songs: [
        {
          name: "1",
          singer: "Raftaar x Fortnite",
          path: "./assets/Music/800 km - Dr.Quang Ft Đen.mp3",
          image: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "2",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./assets/Music/800 km - Dr.Quang Ft Đen.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "3",
          singer: "Raftaar x Brobha V",
          path: "./assets/Music/Bài ca tuổi trẻ - Tam ka Thơm, Long, Khoa.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "4",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./assets/Music/Báo Hỷ.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "5",
          singer: "Raftaar",
          path: "./assets/Music/Cho Tôi Lang Thang.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "6",
          singer: "Raftaar x kr$na",
          path:
            "./assets/Music/Chuyện đời.mp3",
          image:
          "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "7",
          singer: "Raftaar x Harjas",
          path: "./assets/Music/Chúc Ngủ Ngon Official - PKL.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        },
        {
          name: "8",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./assets/Music/Báo Hỷ.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "9",
          singer: "Raftaar",
          path: "./assets/Music/Cho Tôi Lang Thang.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "10",
          singer: "Raftaar x kr$na",
          path:
            "./assets/Music/Chuyện đời.mp3",
          image:
          "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "11",
          singer: "Raftaar x Harjas",
          path: "./assets/Music/Chúc Ngủ Ngon Official - PKL.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        },
        {
          name: "12",
          singer: "Raftaar",
          path: "./assets/Music/Cho Tôi Lang Thang.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "13",
          singer: "Raftaar x kr$na",
          path:
            "./assets/Music/Chuyện đời.mp3",
          image:
          "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "14",
          singer: "Raftaar x Harjas",
          path: "./assets/Music/Chúc Ngủ Ngon Official - PKL.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
      ],
      //Render bài hát
      render: function(){
          const htmls = this.songs.map(function(song,i){
              return   ` <div class="song song${i}" data-index="${i}">
                            <div class="thumb" style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                            </div>
                      </div>`
          });
          playlist.innerHTML = htmls.join('')
      },
      //Xác định thuộc tính
      defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
          get: function() {
            return this.songs[this.currentIndex];
          }
        });
      },
      //Xử lý các hàm
      handleEvents: function(){
        let _this=this;
        //Thu nhỏ, phóng to thumb khi cuộn chuột
        document.onscroll = function(){
            let scrollTop =  document.documentElement.scrollTop;
            let newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth >0 ? newCdWidth + 'px' :0;
            cd.style.opacity = (newCdWidth/cdWidth)
        }

        //Xử lý play/pause:
        //Gán _this cho this(lúc này _this tương đương với app) 
        // để sử dụng trong hàm onclick do hàm onclick sẽ có this không phải app:
        
        // Xử lý khi click vào nút play/pause:
        playBtn.onclick = function(){
          if(_this.isPlaying){
            audio.pause();
          }else{
            audio.play();
          }
        }
        
        //Quay cd-thumb:
        let cdThumbAnima =  songImg.animate(
          [
          {transform: 'rotate(360deg)'}
          ],
          {
            duration: 10000,
            iterations: Infinity
          }
        );
        cdThumbAnima.pause();
        // Xử lý lắng nghe sự kiện play
        audio.onplay = function(){
          _this.isPlaying=true;
          player.classList.add('playing');
          cdThumbAnima.play();
        }

        // Xử lý lắng nghe sự kiện pause
        audio.onpause = function(){
          _this.isPlaying=false;
          player.classList.remove('playing');
          cdThumbAnima.pause();
        }

        //Lắng nghe tiến độ bài hát
        audio.ontimeupdate = function(){
          let progressBar = $('.progress')
          let songTimePercent = audio.currentTime/audio.duration*100;
          if(audio.duration){
            //Gán phần trăm bài hát cho value của progress bar:
            // progressBar.setAttribute('value',songTimePercent)
            progressBar.value = songTimePercent;
          }
          //Tua bài hát (Gán value của progress bar cho phần trăm bài hát):
          progressBar.onchange = function(e){
            audio.currentTime = e.target.value*audio.duration/100;
          }
        }
        
        // Chuyển bài hát bằng nút next
        nextBtn.onclick = function(){
          if(_this.isRandom){
            _this.nextRandom();
          }else{
            _this.nextSong();
          }
          audio.play();
        }
        //Chuyển bài hát bằng nút back
        prevBtn.onclick = function(){
          if(_this.isRandom){
            _this.nextRandom();
          }else{
            _this.prevSong();
          }
          audio.play();
        }

        //Bật chế độ random bài hát
        randomBtn.onclick = function(){
          _this.isRandom = !_this.isRandom;
          randomBtn.classList.toggle('active',_this.isRandom)
          console.log(_this.isRandom);
          // if(this.isRandom){
          //   this.isRandom = false;
          //   randomBtn.classList.remove('active')
          // }else{
          //   this.isRandom = true;
          //   randomBtn.classList.add('active')
          // }
          
        }

        //Next khi hết bài
        audio.onended = function(){
          if(_this.isRepeat){
            audio.currentTime = 0;
            //Hoặc sử dụng audio.play() để phát lại
            audio.play();
          }else{
            nextBtn.click();
            if(audio.paused){
              nextBtn.click();
            }
          }
        }

        //Bật chế độ repeat
        repeatBtn.onclick = function(){
          _this.isRepeat = !_this.isRepeat;
          repeatBtn.classList.toggle('active');
          console.log(_this.isRepeat)
        }
      
        //Click chọn bài hát
        playList.onclick = function(e){
          const songNode = e.target.closest('.song:not(.active)');

          if(songNode||e.target.closest('.option')){
            //Xử lý khi click vào bài hát không active
            if(songNode){
              _this.currentIndex=songNode.getAttribute('data-index');
              
            }
            //Xử lý khi click vào option
            if(e.target.closest('.option')){
              
            }
          }
          //Render play list
          _this.render();
          //Active bài hát chính
          _this.activeSong();
          //Load bài hát
          _this.loadCurrentSong();
          //Play bài hát
          audio.play();
        }
      },
      //Load bài hát lên màn hình chính
      loadCurrentSong: function(){
        header.textContent = this.currentSong.name;
        songImg.style.backgroundImage = `url("${this.currentSong.image}")`;
        audio.setAttribute('src', this.currentSong.path);
      },
      //Next bài hát 
      nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length){
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
        //Xóa class active bài hát hiện tại
        $('.song.active').classList.remove('active');
        //Thêm class active cho bài mới
        this.activeSong();
        //Cuộn đến bài hát chính
        this.scrollMainSong();
      },
      //Back bài hát
      prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex<0){
          this.currentIndex = this.songs.length-1;
        }
        this.loadCurrentSong();
        //Xóa class active bài hát hiện tại
        $('.song.active').classList.remove('active');
        //Thêm class active cho bài mới
        this.activeSong();
        //Cuộn đến bài hát chính
        this.scrollMainSong();
      },
      //Random khi ấn next
      nextRandom: function(){
        let randomIndex;
        do{
          randomIndex = Math.floor(Math.random()*this.songs.length+1)
        }while(randomIndex===app.currentIndex)
        this.currentIndex = randomIndex;
        this.loadCurrentSong();
      },
      //Active bài hát chính
      activeSong: function(){
        const mainSong = $(`.song${this.currentIndex}`)
        mainSong.classList.add('active')
      },
      //Cuộn bài hát
      scrollMainSong: function(){
        setTimeout(()=>{
          $(`.song${this.currentIndex}`).scrollIntoView(
            {
              behavior: "smooth",
              block: "center",
            }
          );
        },300)
      },

      start: function(){
          //Định nghĩa các thuộc tính
          this.defineProperties();
          //Load bài hát
          this.loadCurrentSong();
          //Thay đổi cd-thumb khi cuộn chuột
          this.handleEvents();
          //Render play list
          this.render();
          //Active bài hát chính
          this.activeSong();
      }
}

app.start()