var app = app || {};

app.init = function () {
    var $section = $("section");

    app.getProjects(function (data) {
        $section.removeClass("loading");
        $("<h1>").html(data.user.name).appendTo($section);
        $("<h6>").html("I'm from " + data.user.location +" and blogging on http://" + data.user.blog).appendTo($section);
        $("<h6>").html("I've " + data.user.followers_count +" followers for " + data.user.public_repo_count + " repos and " + data.user.public_gist_count+ " public gists").appendTo($section);
    
        $("<h2>").html("My open source projects").appendTo($section);
        
        var $repo,
            repo,
            $projects = $("<div>").attr("id", "projects").appendTo($section);
        
        for(var i = 0; i < data.repos.length; i++) {
            repo = data.repos[i];
            $repo = $("<article>").appendTo($projects);
            $("<a>").attr("href", "https://github.com/yuxel/" + repo.name).attr("target", "blank").html(repo.name).appendTo($repo);
            $("<span>").html(" - " + repo.description).appendTo($repo);
            $("<em>").html(" (" + repo.language + ")").appendTo($repo);
            
        }

    });
};


app.getProjects = function (callback) {
    var yuxel = gh.user("yuxel");
    yuxel.show(function (userData) {
        yuxel.repos(function (repoData) {
            callback({user: userData.user, repos : repoData.repositories});
        });
    });
};

$(app.init);
