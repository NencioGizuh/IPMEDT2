window.onload = function()
{
    var firstPage = document.getElementById("js--FirstPage");
    var secondPage = document.getElementById("js--SecondPage");
    var thirdPage = document.getElementById("js--ThirdPage");
    var fourthPage = document.getElementById("js--FourthPage");
    var fifthPage = document.getElementById("js--FifthPage");
    var fifthTwoPage = document.getElementById("js--FifthTwoPage");
    var fifthThreePage = document.getElementById("js--FifthThreePage");
    var fifthFourPage = document.getElementById("js--FifthFourPage");
    var sixthPage = document.getElementById("js--SixthPage");
    var seventhPage = document.getElementById("js--SeventhPage");
    var eightPage = document.getElementById("js--EightPage");
    var ninethPage = document.getElementById("js--NinethPage");
    var tenthPage = document.getElementById("js--TenthPage");
    var eleventhPage = document.getElementById("js--EleventhPage");
    var twelfthPage = document.getElementById("js--TwelfthPage");
    var thirteenthPage = document.getElementById("js--ThirteenthPage");
    var fourteenthPage = document.getElementById("js--FourteenthPage");
    var fifthteenPage = document.getElementById("js--FifthteenPage");
    var sixteenthPage = document.getElementById("js--SixteenthPage");
    var seventeenthPage = document.getElementById("js--SeventeenthPage");
    var eighteenPage = document.getElementById("js--EighteenthPage");
    var nineteenthPage = document.getElementById("js--NineteenthPage");
    var twentiethPage = document.getElementById("js--TwentiethPage");
    var twentyFirstPage = document.getElementById("js--TwentyFirstPage");
    var twentySecondPage = document.getElementById("js--TwentySecondPage");
    var twentyThirdPage = document.getElementById("js--TwentyThirdPage");
    var twentyFourPage = document.getElementById("js--TwentyFourthPage");
    var twentyFourTwoPage = document.getElementById("js--TwentyFourthTwoPage");
    var twentyFivePage = document.getElementById("js--TwentyFivePage");
    var quitPage = document.getElementById("js--QuitPage");
    var quitPage2 = document.getElementById("js--QuitPage2");
    var quitPage3 = document.getElementById("js--QuitPage3");
    var quitPage4 = document.getElementById("js--QuitPage4");
    var pageInBetween = document.getElementById("js--PageInbetween");
    var endingStory2 = document.getElementById("js--Ending2Story");
    
    var startButton = document.getElementById("js--startbutton");
    var okayButton = document.getElementById("js--okaybutton");
    var noButton = document.getElementById("js--nobutton");
    var openButton = document.getElementById("js--openbutton");
    var openButton2 = document.getElementById("js--openbutton2");
    var openButton3 = document.getElementById("js--openbutton3");
    var openButton4 = document.getElementById("js--openbutton4");
    var quitButton = document.getElementById("js--quitbutton");
    var quitButton2 = document.getElementById("js--quitbutton2");
    var quitButton3 = document.getElementById("js--quitbutton3");
    var quitButton4 = document.getElementById("js--quitbutton4");
    var yesButton = document.getElementById("js--yesbutton");
    var yesButton2 = document.getElementById("js--yesbutton2");
    var yesButton3 = document.getElementById("js--yesbutton3");
    var yesButton4 = document.getElementById("js--yesbutton4");
    var yesButton5 = document.getElementById("js--yesbutton5");
    var noButton2 = document.getElementById("js--nobutton2");
    var noButton3 = document.getElementById("js--nobutton3");
    var noButton4 = document.getElementById("js--nobutton4");
    var noButton5 = document.getElementById("js--nobutton5");
    var noButton6 = document.getElementById("js--nobutton6");
    var nextButton = document.getElementById("js--nextbutton");
    var nextButton2 = document.getElementById("js--nextbutton2");
    var nextButton3 = document.getElementById("js--nextbutton3");
    var keepButton = document.getElementById("js--keepbutton");
    var keepButton2 = document.getElementById("js--keepbutton2");
    var keepbutton3 = document.getElementById("js--keepbutton3");
    var discardButton = document.getElementById("js--discardbutton");
    var discardButton2 = document.getElementById("js--discardbutton2");
    var discardButton3 = document.getElementById("js--discardbutton3");
    var endButton = document.getElementById("js--endbutton");
    var endButton2 = document.getElementById("js--endbutton2");
    var endButton3 = document.getElementById("js--endbutton3");
    var playingButton = document.getElementById("js--playingbutton");
    var playingButton2 = document.getElementById("js--playingbutton2");
    var playingButton3 = document.getElementById("js--playingbutton3");
    var playingButton4 = document.getElementById("js--playingbutton4");
    var playingButton5 = document.getElementById("js--playingbutton5");
    var playingButton6 = document.getElementById("js--playingbutton6");
    
    var lootbox = document.getElementById("Lootbox3D");
    var lootboxLid = document.getElementById("LootboxLid");
    
    function NextPage() {
    setTimeout(function()
  {
    secondPage.style.display = "none";
    thirdPage.style.display ="block";
  }, 8000);

}

   function ScenarioPage() {
   setTimeout(function()
   {
    thirdPage.style.display = "none";
    fourthPage.style.display ="block";
   }, 16000);

}

   function EndingPage() {
   setTimeout(function()
   {
    endingStory2.style.display = "none";
    pageInBetween.style.display ="block";
   }, 8000);

}
    
   function StoryPage() {
   setTimeout(function()
   {
    seventhPage.style.display = "none";
    eightPage.style.display ="block";
   }, 8000);

}
    

   function SecondStoryPage() {
   setTimeout(function()
   {
    thirteenthPage.style.display = "none";
    fifthTwoPage.style.display ="block";
   }, 8000);

}

   function ThirdStoryPage() {
   setTimeout(function()
   {
    eighteenPage.style.display = "none";
    fifthThreePage.style.display ="block";
   }, 8000);

}

   function FourthStoryPage() {
   setTimeout(function()
   {
    twentyThirdPage.style.display = "none";
    fifthFourPage.style.display ="block";
   }, 8000);

}
    
   function LastStoryPage() {
   setTimeout(function()
   {
    twentyFourPage.style.display = "none";
    twentyFourTwoPage.style.display ="block";
   }, 8000);

}

   function Ending3Page() {
   setTimeout(function()
   {
    twentyFourTwoPage.style.display = "none";
    twentyFivePage.style.display ="block";
   }, 16000);

}    
    lootbox.onclick = function()
    {
        lootboxLid.style.animationDuration = "3s";
    };
    
    startButton.onclick = function()
    {
        firstPage.style.display = "none";
        secondPage.style.display = "block";
        NextPage();
        ScenarioPage();
    };
    
    okayButton.onclick = function()
    {
        fourthPage.style.display = "none";
        fifthPage.style.display = "block";
    };
    
    noButton.onclick = function()
    {
        fourthPage.style.display = "none";
        sixthPage.style.display = "block";
    };
    
    yesButton.onclick = function()
    {
        sixthPage.style.display = "none";
        seventhPage.style.display = "block";
        StoryPage();
    };
    
    noButton2.onclick = function()
    {
        sixthPage.style.display = "none";
        seventhPage.style.display = "none";
        fourthPage.style.display = "block";
    };
    
    openButton.onclick = function()
    {
        fifthPage.style.display = "none";
        ninethPage.style.display = "block";
    };
    
    nextButton.onclick = function()
    {
        ninethPage.style.display = "none";
        tenthPage.style.display = "block";
    };
    
    keepButton.onclick = function()
    {
        tenthPage.style.display = "none";
        eleventhPage.style.display = "block";
    };
    
    discardButton.onclick = function()
    {
        tenthPage.style.display = "none";
        twelfthPage.style.display = "block";
    };
    
    endButton.onclick = function()
    {
        eightPage.style.display = "none";
        firstPage.style.display = "block";
    };
    
    playingButton.onclick = function()
    {
        eleventhPage.style.display = "none";
        thirteenthPage.style.display = "block";
        SecondStoryPage();
    };
    
    playingButton2.onclick = function()
    {
        twelfthPage.style.display = "none";
        thirteenthPage.style.display = "block";
        SecondStoryPage();
    };
    
    openButton2.onclick = function()
    {
        fifthTwoPage.style.display = "none";
        fourteenthPage.style.display = "block";
    };
    
    nextButton2.onclick = function()
    {
        fourteenthPage.style.display = "none";
        fifthteenPage.style.display = "block";
    };
    
    keepButton2.onclick = function()
    {
        fifthteenPage.style.display = "none";
        sixteenthPage.style.display = "block";
    };
    
    discardButton2.onclick = function()
    {
        fifthteenPage.style.display = "none";
        seventeenthPage.style.display = "block";
    };
    
    playingButton3.onclick = function()
    {
        sixteenthPage.style.display = "none";
        eighteenPage.style.display = "block";
        ThirdStoryPage();
    };
    
    playingButton4.onclick = function()
    {
        seventeenthPage.style.display = "none";
        eighteenPage.style.display = "block";
        ThirdStoryPage();
    };
    
    openButton3.onclick = function()
    {
        fifthThreePage.style.display = "none";
        nineteenthPage.style.display = "block";
    };
    
    nextButton3.onclick = function()
    {
        nineteenthPage.style.display = "none";
        twentiethPage.style.display = "block";
    };
    
    keepbutton3.onclick = function()
    {
        twentiethPage.style.display = "none";
        twentyFirstPage.style.display = "block";
    };
    
    discardButton3.onclick = function()
    {
        twentiethPage.style.display = "none";
        twentySecondPage.style.display ="block";
    };
    
    playingButton5.onclick = function()
    {
        twentyFirstPage.style.display = "none";
        twentyThirdPage.style.display = "block";
        FourthStoryPage();
    };
    
    playingButton6.onclick = function()
    {
        twentySecondPage.style.display = "none";
        twentyThirdPage.style.display = "block";
        FourthStoryPage();
    };
    
    openButton4.onclick = function()
    {
        fifthFourPage.style.display = "none";
        twentyFourPage.style.display = "block";
        LastStoryPage();
        Ending3Page();
    };
    
    quitButton.onclick = function()
    {
        fifthPage.style.display = "none";
        quitPage.style.display = "block";
    };
    
    yesButton2.onclick = function()
    {
        quitPage.style.display = "none";
        seventhPage.style.display = "block";
        StoryPage();
    };
    
    noButton3.onclick = function()
    {
        quitPage.style.display = "none";
        fifthPage.style.display = "block";
    };
    
    quitButton2.onclick = function()
    {
        fifthTwoPage.style.display = "none";
        quitPage2.style.display = "block";
    };
    
    yesButton3.onclick = function()
    {
        quitPage2.style.display = "none";
        endingStory2.style.display = "block";
        EndingPage();
    };
    
    noButton4.onclick = function()
    {
        quitPage2.style.display = "none";
        fifthTwoPage.style.display = "block";
    };
    
    endButton2.onclick = function()
    {
        pageInBetween.style.display = "none";
        firstPage.style.display = "block";
    };
    
    quitButton3.onclick = function()
    {
        fifthThreePage.style.display ="none";
        quitPage3.style.display ="block";
    };
    
    yesButton4.onclick = function()
    {
        quitPage3.style.display = "none";
        endingStory2.style.display = "block";
        EndingPage();
    };
    
    noButton5.onclick = function()
    {
        quitPage3.style.display ="none";
        fifthThreePage.style.display ="block";
    };
    
    quitButton4.onclick = function()
    {
        fifthFourPage.style.display = "none";
        quitPage4.style.display = "block";
    };
    
    yesButton5.onclick = function()
    {
        quitPage4.style.display = "none";
        endingStory2.style.display ="block";
        EndingPage();
    };
    
    noButton6.onclick = function()
    {
        quitPage4.style.display ="none";
        fifthFourPage.style.display ="block";
    };
    
    endButton3.onclick = function()
    {
        twentyFivePage.style.display = "none";
        firstPage.style.display = "block";
    };
    
};