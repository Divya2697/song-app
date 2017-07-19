				var Playnumb = 0  ;
				var shuffle=0;
				var equal = 0;
				var currentSongNumber = 1;
				var willLoop = 0;
				var willShuffle = 0;
				var willvisual = 0;

				
					function randomExcluded(min, max, excluded) {					//shuffle 
					var n = Math.floor(Math.random() * (max-min) + min);
					if (n >= excluded) n++;
					return n;
			}


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
		     


				function changeSong()                                     // to change song
				{
				var music =  songs[Playnumb].fileName;
				var song = document.querySelector("audio");
				song.src = music;
				toggleSong();
				changeCurrentSongDetails(songs[Playnumb])
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
 
		$('body').on('keypress', function(event) {                  //PLAY OR PAUSE USING SPACEBAR
        var target = event.target;
        if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

			
			
		function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
    }
		
		

						function UpdateTimer() {									//function for progress bar
						var song = document.querySelector('audio');
						var ct = song.currentTime;
						var td = song.duration;
						var percentage = (ct/td)*100;
						$('.progress-filled').css('width', percentage+ "%");
						}

							function timeJump() {									//function for jumping to next song
							var song = document.querySelector('audio')
							song.currentTime = song.duration - 5;
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
		

		updateCurrentTime();                                  //after every 1 sec time will be updated in footer
        setInterval(function() {
        updateCurrentTime();
		UpdateTimer();		
         },1000);
		 
		 
		 $('#songs').DataTable({
        paging: false
    });
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
						
						


							$('.fa-repeat').on('click',function() {						// use for loop
							$('.fa-repeat').toggleClass('disabled')
							willLoop = 1 - willLoop;
							});

							$('.fa-random').on('click',function() {							//shuffling
							$('.fa-random').toggleClass('disabled');
							willShuffle = 1 - willShuffle;
							});

							$('audio').on('ended',function() {							//loop
								var audio = document.querySelector('audio');
								if (willShuffle == 1) {
									var nextSongNumber = randomExcluded(1,6,currentSongNumber); 
									var nextSongobj = songs[nextSongNumber-1];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = nextSongNumber;
								}
								else if(currentSongNumber < 5) {						
									var nextSongobj = songs[currentSongNumber];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = currentSongNumber + 1;
								}
								else if(willLoop == 1) {						
									var nextSongobj = songs[0];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber =  1;
								}
								else {
									$('.play-icon').removeClass('fa-pause').addClass('fa-play');
									audio.currentTime = 0;
								}
							});
						
						
						
	
 				

	   
		 
		 
$(".fa-step-forward").click(function(){                                //to go to next song

if(shuffle==1)
{
var audio = document.querySelector('audio');
var nextSongNumber = randomExcluded(0,3,Playnumb); 

var nextSongObj = songs[nextSongNumber];
audio.src = nextSongobj.fileName;
toggleSong();
changeCurrentSongDetails(nextSongobj);
Playnumb = nextSongNumber;


}


else {

if(Playnumb == songs.length-1){
Playnumb = 0;
changeSong();
}

else {
console.log("two");
console.log(Playnumb);
Playnumb++;
changeSong();
}

}

})




$(".fa-step-backward").click(function(){                        //to go back to previous song

if(Playnumb == 0){
console.log("one");
Playnumb = (songs.length-1);
changeSong();




}

else {
console.log("two");
console.log(Playnumb);
Playingnumber--;
changeSong();
}




})
	
	
	
	
	
	
	
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
	  
    $('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();                                  
         var email = $('#email-input').val();  
         var pswd = $('#pswd-input').val();           
       
    if(name.length > 3 && email.search('test@acadview.com') != -1 && pswd.search('JavascriptRocks')!=-1){         // to validate the input tags
      var message = "Welcome, " + name;                                                                         //show message on second page 
      $('.main .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.main').removeClass('hidden');
      $(".content h1").text(message);
     }
     else{
         $("#name-input").addClass("error"); 
		    $("#email-input").addClass("error"); 
			   $("#pswd-input").addClass("error"); 
     }
       
});
	
    