		
		 	function fancyTimeFormat(time)                       //time setting to show time in minutes 
		 {   
		     var hrs = ~~(time / 3600);
		     var mins = ~~((time % 3600) / 60);
		     var secs = time % 60;
		  
		     
		     var ret = "";
		 
		     if (hrs > 0) {
		         ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		     }
		 
		     ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		     ret += "" + secs;
		     return ret;
		 }
		         

		 function toggleSong() {                                          //function addition for play and pause setting
         var song = document.querySelector('audio');
        if(song.paused == true) {
        console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
        }
        else {
        console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
        }
        } 
		
		 $('.play-icon').on('click', function() {                 //play or pause button addition
         toggleSong();
         });
 
		$('body').on('keypress', function(event) {               //PLAY OR PAUSE USING SPACEBAR
                if (event.keyCode == 32) 
				{
                    toggleSong();
                }
            });
			
			
		function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
    }
		
			
			
			
 			function addSongNameClickEvent(songObj,position) {    //click event for each song ('by clicking on songname or album etc., we can play the song')
             var songName = songObj.fileName;                      // New Variable              
             var id = '#song' + position;
 			$(id).click(function() {
 			var audio = document.querySelector('audio');
 			var currentSong = audio.src;
 			if(currentSong.search(songName) != -1)
 			{
 			toggleSong();
 			}
 			else {
 			audio.src = songName;
 			toggleSong();
			changeCurrentSongDetails(songObj);                        // Function Call
 			}
 			});
		}
		

	
	    function updateCurrentTime() {                                     //duration and current time display function
		var song = document.querySelector('audio');
		//console.log(song.currentTime);
		//console.log(song.duration);
		var currentTime = Math.floor(song.currentTime);
		currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
		duration = fancyTimeFormat(duration);
		$('.time-elapsed').text(currentTime);
		$('.song-duration').text(duration);
		} 
		 
		 //var songName1 = 'Despacito';                                              //simple declaration
		// var songName2 = 'Work';
         //var songName3 = 'Shape of you';
         //var songName4 = 'Treat you better';
		 //var songName5 = 'Work from home';
		  //var songList = ['Despacito','Work', 'Shape of you', 'Treat you better' , 'Work from home '];             //array 
		  
	       		 var songs = [{                                                 //object created to access songs
 				'name': 'Despacito',
 				'artist': 'Luis Fonsi ft.Justin Bieber',
 				'album': 'Despacito & Mis Grandes Éxitos',
 				'duration': '2:45',
 			   'fileName': 'song1.mp3',
			   'image' : 'song1.jpg'
 					},
 			{
 				'name': 'Work',
 				'artist': 'Rihanna',
 				'album': 'Anti',
 				'duration': '3:36',
 				'fileName': 'song2.mp3',
				  'image' : 'song2.jpg'
 			},
 			{
 				'name': 'Shape of you',
 				'artist': ' Ed Sheeran ',
 				'album': 'Divide',
 				'duration': '3:53',
 				'fileName': 'song3.mp3',
				  'image' : 'song3.jpg'
 			},
 			{
 				'name': 'Treat you better',
 				'artist': 'Shawn Mendes',
 				'album': 'Illuminate',
 				'duration': '4:16',
 				'fileName': 'song4.mp3',
				  'image' : 'song4.jpg'
 			},	
 				{
 				'name': 'Work from home',
 				'artist': 'Fifth Harmony ',
 				'album': '7/27',
 				'duration': '3:36',
 			   'fileName': 'song5.mp3',
			     'image' : 'song5.jpg'
 					},
			
 				]
		 
		 window.onload = function() {                        //window onload function used for whole window events
		  
 			for(var i =0; i < songs.length;i++) {               //using object displaying list of song name, album etc.
 			var obj = songs[i];
 			var name = '#song' + (i+1);
 			var song = $(name);
 			song.find('.song-name').text(obj.name);
 			song.find('.song-artist').text(obj.artist);
 			song.find('.song-album').text(obj.album);
 			song.find('.song-length').text(obj.duration);
 			addSongNameClickEvent(obj,i+1)

 		}
		

		 
					// addSongNameClickEvent(fileNames[0],1);
					 //addSongNameClickEvent(fileNames[1],2);
					 //addSongNameClickEvent(fileNames[2],3);
					 //addSongNameClickEvent(fileNames[3],4);
					 //addSongNameClickEvent(fileNames[4],5);
							
					
						//for (var i = 0; i < fileNames.length ; i++) {
						//addSongNameClickEvent(fileNames[i],i+1)
						//	} 
 	
						//$('#song1 .song-name').text(songName1);
						//$('#song2 .song-name').text(songName2);
						//$('#song3 .song-name').text(songName3);
						//$('#song4 .song-name').text(songName4);
						// $('#song5 .song-name').text(songName5);
		 
		 
 				

	   updateCurrentTime();                                  //after every 1 sec time will be updated in footer
        setInterval(function() {
        updateCurrentTime();
         },1000);
		 
		 
		 $('#songs').DataTable({
        paging: false
    });
		 }
	
	
	
	
	
	
	
	/*var name;
	       name=document.querySelector('#name-input').value;
	       //console.log(name);
	       setTimeout(function() {

            var name = document.querySelector('#name-input').value;

            console.log(name);

             },5000); */
			 
			 
       /* var button = document.querySelector('.welcome-screen button');

           button.addEventListener('click',function() {
            alert('You clicked me');
            });
			*/
	
	
	
	
	
	
	
	// document.querySelector('.name-input').value;                  
	  $('.welcome-screen button').on('click', function() {                                  //welcome screen
       var name = $('#name-input').val();
	   if(name.length > 2)  {
	   var message ="Welcome to virtual drum kit, " +name;     //welcome-message
	   $('.main h1').text(message); //text message
	   //console.log(message);
	   $('.welcome-screen').addClass('hidden');
	   $('.main').removeClass('hidden');
         }
		 else
		 {
		 $('#name-input').addClass('error');
		 }
         });
	 
	 
