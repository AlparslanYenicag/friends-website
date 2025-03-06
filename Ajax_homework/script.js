$(document).ready(function() {
    let start = 0; 
    const limit = 5; 
    let loading = false; 
    let allPostsLoaded = false; 

    function loadPosts() {
        if (loading || allPostsLoaded) return; 
        loading = true;
        $("#loading").show(); 

        console.log(`Fetching posts from ${start} to ${start + limit}...`);

        $.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
            .done(function(posts) {
                if (posts.length === 0) {
                    $("#loading").text("No more posts to load.");
                    allPostsLoaded = true; 
                    return;
                }

                posts.forEach(post => {
                    $("#postContainer").append(`
                        <div class="post">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>
                    `);
                });
                start += limit; 
            })
            .fail(function(error) {
                alert("Error loading posts. Please try again.");
                console.error("API Error:", error);
            })
            .always(function() {
                loading = false;
                $("#loading").hide(); 
            });
    }

    loadPosts();

    $(window).on("scroll", function() {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();

        console.log(`Scroll Position: ${scrollTop}, Window Height: ${windowHeight}, Document Height: ${documentHeight}`);

        if (scrollTop + windowHeight >= documentHeight - 100) {
            loadPosts();
        }
    });
});
