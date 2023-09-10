const application = {
    
    data : {
        title : 'NextJS - SmukNu Run-Through',
        description : '...',
        videos : [
            {
                chapter : "chapter-1",
                duration : "02m.02s",
                title : "Intro",
                video : "https://player.vimeo.com/progressive_redirect/playback/862932854/rendition/1080p/file.mp4?loc=external&log_user=0&signature=b9db0ffe6d907eb348b293d936b207cd2aa61ce8017014e7fd12eb6bd5e1e60b",
                description : "Introduktion til at arbejde med NextJS."
            },
            {
                chapter : "chapter-2",
                duration : "15m.06s",
                title : "Boiler tilpasning og setup.",
                video : "https://player.vimeo.com/progressive_redirect/playback/862937153/rendition/1080p/file.mp4?loc=external&log_user=0&signature=525382603764f8a72b9f1e6eef386bdaeb31a007ce91a99b8a1c7e3ae07ef209",
                description : "Introduktion til at arbejde med NextJS."
            },
            {
                chapter : "chapter-3",
                duration : "13m.18s",
                title : "Pages",
                video : "https://player.vimeo.com/progressive_redirect/playback/862937167/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2465deee271373c4ed86069ac3f3977a67566980bfde9d8963ddaf316322b67d",
                description : "Introduktion til at arbejde med NextJS."
            }
        ]
    },

    bodyTmpl : (location) => {

        let applicationRoot =  'hf-nextjs-intro-boilerplate';
        let gitHubPageIODomain = 'mcdm-viborg-documentation.github.io';

        let path = (location.host === gitHubPageIODomain) ? location.origin + '/' + applicationRoot + '/' : '/';

        return `<div>
            <h1><img src="./assets/square_logo.png" width="50px">${application.data.title}</h1>
            <p>${application.data.description}</p>
            <h3>Index</h3>
            <ol>
                ${application.data.videos.map((video, index) => { return `<li><a href="${path}?chapter=${video.chapter}">${video.title}</a></li>` }).join('')}
            </ol>
        
            <div id="video"></div>
        </div>`

    },

    indexTmpl : () => {

        return `<p>...</p>`

    },

    videoTmpl : (obj) => {

        return `<div class="video">
            <h2>${obj.title}</h2>
            <video width="650" src="${obj.video}" controls></video>    
            <p>${obj.description}</p>
        </div>`

    },

    init : () => {

        const body = document.querySelector('body');
        const index = new URLSearchParams(location.search).get('index');
        const chapter = new URLSearchParams(location.search).get('chapter');

        document.title = application.data.title;
        
        // Adding the body template.
        body.insertAdjacentHTML('afterbegin', application.bodyTmpl(location))
        let video = chapter ? application.data.videos.find((video) => video.chapter === chapter) : application.data.videos[index];

        // Adding the video template.
        let videoContainer = document.querySelector('#video');
        if(video) {
           
            videoContainer.insertAdjacentHTML('beforebegin', application.videoTmpl(video))
    
        } else {

            videoContainer.insertAdjacentHTML('beforebegin', application.indexTmpl())

        }

    }

};

application.init();

