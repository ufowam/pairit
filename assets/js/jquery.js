  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap/docs/assets/js/jquery.js at master · twitter/bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Yi2q2BoJI68Eu/OD1IX2ZadIC75JPcRllXANd+xuVeg=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-0985ec09f4a36e3462381f1788c903c09c5d94d6.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-450987452c1b67ffd9b1fc4bb61ed5d16f35c83b.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-57542e0cba19d068168099f287c117efa142863c.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-650ee832daf5d46d78829c3f98d1e97bab858056.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/twitter/bootstrap/blob/3b3dd3ac3c7b69d02406ede69bffcc4ee8a1ed6b/docs/assets/js/jquery.js'>
    <meta property="og:title" content="bootstrap"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/twitter/bootstrap"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/2f4a8254d032a8ec5e4c48d461e54fcc?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="bootstrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development."/>

    <meta name="description" content="bootstrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development." />

  <link href="https://github.com/twitter/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="ufowam" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/ufowam" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/970150a4c9fbe28ce6af9c61ed326ac8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> ufowam
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Yi2q2BoJI68Eu/OD1IX2ZadIC75JPcRllXANd+xuVeg=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2126244" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/twitter/bootstrap/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/twitter/bootstrap/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/twitter/bootstrap/stargazers">40,953</a>
          </li>

              <li><a href="/twitter/bootstrap/fork" class="minibutton js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/twitter/bootstrap/network" class="social-count">10,391</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/twitter" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">twitter</span>
                  </a></span> /
                <strong><a href="/twitter/bootstrap" class="js-current-repository">bootstrap</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/twitter/bootstrap" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/twitter/bootstrap/network" highlight="repo_network">Network</a></li>
    <li><a href="/twitter/bootstrap/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>57</span></a></li>

      <li><a href="/twitter/bootstrap/issues" highlight="repo_issues">Issues <span class='counter'>232</span></a></li>

      <li><a href="/twitter/bootstrap/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/twitter/bootstrap/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/twitter/bootstrap/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">15</span></a></li>
      <li><a href="/twitter/bootstrap/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/twitter/bootstrap/blob/2.2.2-wip/docs/assets/js/jquery.js" class="js-navigation-open" data-name="2.2.2-wip" rel="nofollow">2.2.2-wip</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/twitter/bootstrap/blob/bootjack/docs/assets/js/jquery.js" class="js-navigation-open" data-name="bootjack" rel="nofollow">bootjack</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/twitter/bootstrap/blob/exploratory/docs/assets/js/jquery.js" class="js-navigation-open" data-name="exploratory" rel="nofollow">exploratory</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/twitter/bootstrap/blob/gh-pages/docs/assets/js/jquery.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/twitter/bootstrap/blob/master/docs/assets/js/jquery.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>
          </div>

            <div class="js-filter-tab js-filter-tags " style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.2.1/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.2.1" rel="nofollow">v2.2.1</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.2.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.2.0" rel="nofollow">v2.2.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.1.1/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.1.1" rel="nofollow">v2.1.1</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.1.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.1.0" rel="nofollow">v2.1.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.0.4/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.0.4" rel="nofollow">v2.0.4</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.0.3/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.0.3" rel="nofollow">v2.0.3</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.0.2/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.0.2" rel="nofollow">v2.0.2</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.0.1/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.0.1" rel="nofollow">v2.0.1</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v2.0.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v2.0.0" rel="nofollow">v2.0.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.4.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.4.0" rel="nofollow">v1.4.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.3.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.3.0" rel="nofollow">v1.3.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.2.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.2.0" rel="nofollow">v1.2.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.1.1/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.1.1" rel="nofollow">v1.1.1</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.1.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.1.0" rel="nofollow">v1.1.0</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/twitter/bootstrap/blob/v1.0.0/docs/assets/js/jquery.js" class="js-navigation-open" data-name="v1.0.0" rel="nofollow">v1.0.0</a>
                    </h4>
                  </div>
              </div>
              <div class="no-results">Nothing to show</div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/twitter/bootstrap" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/twitter/bootstrap/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/twitter/bootstrap/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">5</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:269d296d92b495b0c70cb742ec5acb4f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:269d296d92b495b0c70cb742ec5acb4f -->

<div id="slider">


    <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
    <div class="breadcrumb" data-path="docs/assets/js/jquery.js/">
      <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap/tree/master/docs" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">docs</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap/tree/master/docs/assets" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">assets</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap/tree/master/docs/assets/js" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">js</span></a></span> / <strong class="final-path">jquery.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="docs/assets/js/jquery.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

    <a href="/twitter/bootstrap/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

      
  <div class="commit file-history-tease" data-path="docs/assets/js/jquery.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/fat" rel="author">fat</a></span>
    <time class="js-relative-date" datetime="2012-09-20T16:23:54-07:00" title="2012-09-20 16:23:54">September 20, 2012</time>
    <div class="commit-title">
        <a href="/twitter/bootstrap/commit/667179f406ea66fbe2d688bb132eaa0c0f7383a6" class="message">added support for jquery 1.8.*</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fat">fat</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="docs/assets/js/jquery.js/" data-permalink-url="/twitter/bootstrap/blob/3b3dd3ac3c7b69d02406ede69bffcc4ee8a1ed6b/docs/assets/js/jquery.js" data-title="bootstrap/docs/assets/js/jquery.js at master · twitter/bootstrap · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>2 lines (2 sloc)</span>
                <span>92.791 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/twitter/bootstrap/edit/master/docs/assets/js/jquery.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/twitter/bootstrap/raw/master/docs/assets/js/jquery.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/twitter/bootstrap/blame/master/docs/assets/js/jquery.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/twitter/bootstrap/commits/master/docs/assets/js/jquery.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*! jQuery v@1.8.1 jquery.com | jquery.org/license */</div><div class='line' id='LC2'>(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&amp;&amp;a.nodeType===1){var e=&quot;data-&quot;+c.replace(I,&quot;-$1&quot;).toLowerCase();d=a.getAttribute(e);if(typeof d==&quot;string&quot;){try{d=d===&quot;true&quot;?!0:d===&quot;false&quot;?!1:d===&quot;null&quot;?null:+d+&quot;&quot;===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b===&quot;data&quot;&amp;&amp;p.isEmptyObject(a[b]))continue;if(b!==&quot;toJSON&quot;)return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&amp;&amp;a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b==&quot;string&quot;){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)&gt;=0===c})}function bk(a){var b=bl.split(&quot;|&quot;),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d&lt;e;d++)p.event.add(b,c,h[c][d])}g.data&amp;&amp;(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&amp;&amp;b.clearAttributes(),b.mergeAttributes&amp;&amp;b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c===&quot;object&quot;?(b.parentNode&amp;&amp;(b.outerHTML=a.outerHTML),p.support.html5Clone&amp;&amp;a.innerHTML&amp;&amp;!p.trim(b.innerHTML)&amp;&amp;(b.innerHTML=a.innerHTML)):c===&quot;input&quot;&amp;&amp;bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&amp;&amp;(b.value=a.value)):c===&quot;option&quot;?b.selected=a.defaultSelected:c===&quot;input&quot;||c===&quot;textarea&quot;?b.defaultValue=a.defaultValue:c===&quot;script&quot;&amp;&amp;b.text!==a.text&amp;&amp;(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!=&quot;undefined&quot;?a.getElementsByTagName(&quot;*&quot;):typeof a.querySelectorAll!=&quot;undefined&quot;?a.querySelectorAll(&quot;*&quot;):[]}function bG(a){bv.test(a.type)&amp;&amp;(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,&quot;display&quot;)===&quot;none&quot;||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f&lt;g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,&quot;olddisplay&quot;),b?(!e[f]&amp;&amp;c.style.display===&quot;none&quot;&amp;&amp;(c.style.display=&quot;&quot;),c.style.display===&quot;&quot;&amp;&amp;bZ(c)&amp;&amp;(e[f]=p._data(c,&quot;olddisplay&quot;,cc(c.nodeName)))):(d=bH(c,&quot;display&quot;),!e[f]&amp;&amp;d!==&quot;none&quot;&amp;&amp;p._data(c,&quot;olddisplay&quot;,d))}for(f=0;f&lt;g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display===&quot;none&quot;||c.style.display===&quot;&quot;)c.style.display=b?e[f]||&quot;&quot;:&quot;none&quot;}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||&quot;px&quot;):b}function ca(a,b,c,d){var e=c===(d?&quot;border&quot;:&quot;content&quot;)?4:b===&quot;width&quot;?1:0,f=0;for(;e&lt;4;e+=2)c===&quot;margin&quot;&amp;&amp;(f+=p.css(a,c+bV[e],!0)),d?(c===&quot;content&quot;&amp;&amp;(f-=parseFloat(bH(a,&quot;padding&quot;+bV[e]))||0),c!==&quot;margin&quot;&amp;&amp;(f-=parseFloat(bH(a,&quot;border&quot;+bV[e]+&quot;Width&quot;))||0)):(f+=parseFloat(bH(a,&quot;padding&quot;+bV[e]))||0,c!==&quot;padding&quot;&amp;&amp;(f+=parseFloat(bH(a,&quot;border&quot;+bV[e]+&quot;Width&quot;))||0));return f}function cb(a,b,c){var d=b===&quot;width&quot;?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&amp;&amp;p.css(a,&quot;boxSizing&quot;)===&quot;border-box&quot;;if(d&lt;=0||d==null){d=bH(a,b);if(d&lt;0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&amp;&amp;(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?&quot;border&quot;:&quot;content&quot;),e)+&quot;px&quot;}function cc(a){if(bS[a])return bS[a];var b=p(&quot;&lt;&quot;+a+&quot;&gt;&quot;).appendTo(e.body),c=b.css(&quot;display&quot;);b.remove();if(c===&quot;none&quot;||c===&quot;&quot;){bI=e.body.appendChild(bI||p.extend(e.createElement(&quot;iframe&quot;),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write(&quot;&lt;!doctype html&gt;&lt;html&gt;&lt;body&gt;&quot;),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,&quot;display&quot;),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+&quot;[&quot;+(typeof e==&quot;object&quot;?b:&quot;&quot;)+&quot;]&quot;,e,c,d)});else if(!c&amp;&amp;p.type(b)===&quot;object&quot;)for(e in b)ci(a+&quot;[&quot;+e+&quot;]&quot;,b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!=&quot;string&quot;&amp;&amp;(c=b,b=&quot;*&quot;);var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h&lt;i;h++)d=g[h],f=/^\+/.test(d),f&amp;&amp;(d=d.substr(1)||&quot;*&quot;),e=a[d]=a[d]||[],e[f?&quot;unshift&quot;:&quot;push&quot;](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j&lt;k&amp;&amp;(l||!h);j++)h=i[j](c,d,e),typeof h==&quot;string&quot;&amp;&amp;(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&amp;&amp;!g[&quot;*&quot;]&amp;&amp;(h=cA(a,c,d,e,&quot;*&quot;,g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&amp;&amp;((f[d]?a:e||(e={}))[d]=c[d]);e&amp;&amp;p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&amp;&amp;(c[k[f]]=d[f]);while(j[0]===&quot;*&quot;)j.shift(),e===b&amp;&amp;(e=a.mimeType||c.getResponseHeader(&quot;content-type&quot;));if(e)for(f in i)if(i[f]&amp;&amp;i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+&quot; &quot;+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&amp;&amp;j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&amp;&amp;(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!==&quot;*&quot;){if(h!==&quot;*&quot;&amp;&amp;h!==e){c=i[h+&quot; &quot;+e]||i[&quot;* &quot;+e];if(!c)for(d in i){f=d.split(&quot; &quot;);if(f[1]===e){c=i[h+&quot; &quot;+f[0]]||i[&quot;* &quot;+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&amp;&amp;(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&amp;&amp;a[&quot;throws&quot;])b=c(b);else try{b=c(b)}catch(k){return{state:&quot;parsererror&quot;,error:c?k:&quot;No conversion from &quot;+h+&quot; to &quot;+e}}}h=e}return{state:&quot;success&quot;,data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT[&quot;*&quot;]),e=0,f=d.length;for(;e&lt;f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e&lt;f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d&lt;1&amp;&amp;f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c&lt;d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e&lt;g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&amp;&amp;j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&amp;&amp;(e=f[1],f=a[c]=f[0]),c!==d&amp;&amp;(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&amp;&amp;&quot;expand&quot;in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&amp;&amp;bZ(a);c.queue||(j=p._queueHooks(a,&quot;fx&quot;),j.unqueued==null&amp;&amp;(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,&quot;fx&quot;).length||j.empty.fire()})})),a.nodeType===1&amp;&amp;(&quot;height&quot;in b||&quot;width&quot;in b)&amp;&amp;(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,&quot;display&quot;)===&quot;inline&quot;&amp;&amp;p.css(a,&quot;float&quot;)===&quot;none&quot;&amp;&amp;(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)===&quot;inline&quot;?m.display=&quot;inline-block&quot;:m.zoom=1)),c.overflow&amp;&amp;(m.overflow=&quot;hidden&quot;,p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?&quot;hide&quot;:&quot;show&quot;))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,&quot;fxshow&quot;)||p._data(a,&quot;fxshow&quot;,{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,&quot;fxshow&quot;,!0);for(b in n)p.style(a,b,n[b])});for(d=0;d&lt;g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&amp;&amp;(i.end=i.start,i.start=e===&quot;width&quot;||e===&quot;height&quot;?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e&lt;4;e+=2-b)c=bV[e],d[&quot;margin&quot;+c]=d[&quot;padding&quot;+c]=a;return b&amp;&amp;(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]*)$)/,v=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:[&quot;\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/&quot;[^&quot;\\\r\n]*&quot;|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+&quot;&quot;).toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener(&quot;DOMContentLoaded&quot;,D,!1),p.ready()):e.readyState===&quot;complete&quot;&amp;&amp;(e.detachEvent(&quot;onreadystatechange&quot;,D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a==&quot;string&quot;){a.charAt(0)===&quot;&lt;&quot;&amp;&amp;a.charAt(a.length-1)===&quot;&gt;&quot;&amp;&amp;a.length&gt;=3?f=[null,a,null]:f=u.exec(a);if(f&amp;&amp;(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&amp;&amp;c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&amp;&amp;p.isPlainObject(c)&amp;&amp;this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&amp;&amp;g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&amp;&amp;(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:&quot;&quot;,jquery:&quot;1.8.1&quot;,length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a&lt;0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b===&quot;find&quot;?d.selector=this.selector+(this.selector?&quot; &quot;:&quot;&quot;)+c:b&amp;&amp;(d.selector=this.selector+&quot;.&quot;+b+&quot;(&quot;+c+&quot;)&quot;),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),&quot;slice&quot;,k.call(arguments).join(&quot;,&quot;))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h==&quot;boolean&quot;&amp;&amp;(k=h,h=arguments[1]||{},i=2),typeof h!=&quot;object&quot;&amp;&amp;!p.isFunction(h)&amp;&amp;(h={}),j===i&amp;&amp;(h=this,--i);for(;i&lt;j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&amp;&amp;e&amp;&amp;(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&amp;&amp;p.isArray(d)?d:[]):g=d&amp;&amp;p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&amp;&amp;(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&amp;&amp;(a.$=i),b&amp;&amp;a.jQuery===p&amp;&amp;(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&amp;&amp;--p.readyWait&gt;0)return;d.resolveWith(e,[p]),p.fn.trigger&amp;&amp;p(e).trigger(&quot;ready&quot;).off(&quot;ready&quot;)},isFunction:function(a){return p.type(a)===&quot;function&quot;},isArray:Array.isArray||function(a){return p.type(a)===&quot;array&quot;},isWindow:function(a){return a!=null&amp;&amp;a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&amp;&amp;isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||&quot;object&quot;},isPlainObject:function(a){if(!a||p.type(a)!==&quot;object&quot;||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&amp;&amp;!n.call(a,&quot;constructor&quot;)&amp;&amp;!n.call(a.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!=&quot;string&quot;?null:(typeof b==&quot;boolean&quot;&amp;&amp;(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!=&quot;string&quot;)return null;b=p.trim(b);if(a.JSON&amp;&amp;a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,&quot;@&quot;).replace(z,&quot;]&quot;).replace(x,&quot;&quot;)))return(new Function(&quot;return &quot;+b))();p.error(&quot;Invalid JSON: &quot;+b)},parseXML:function(c){var d,e;if(!c||typeof c!=&quot;string&quot;)return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,&quot;text/xml&quot;)):(d=new ActiveXObject(&quot;Microsoft.XMLDOM&quot;),d.async=&quot;false&quot;,d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;p.error(&quot;Invalid XML: &quot;+c),d},noop:function(){},globalEval:function(b){b&amp;&amp;r.test(b)&amp;&amp;(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,&quot;ms-&quot;).replace(B,C)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f&lt;g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f&lt;g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&amp;&amp;!o.call(&quot;﻿ &quot;)?function(a){return a==null?&quot;&quot;:o.call(a)}:function(a){return a==null?&quot;&quot;:a.toString().replace(t,&quot;&quot;)},makeArray:function(a,b){var c,d=b||[];return a!=null&amp;&amp;(c=p.type(a),a.length==null||c===&quot;string&quot;||c===&quot;function&quot;||c===&quot;regexp&quot;||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c&lt;0?Math.max(0,d+c):c:0;for(;c&lt;d;c++)if(c in b&amp;&amp;b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d==&quot;number&quot;)for(;f&lt;d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f&lt;g;f++)d=!!b(a[f],f),c!==d&amp;&amp;e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&amp;&amp;typeof i==&quot;number&quot;&amp;&amp;(i&gt;0&amp;&amp;a[0]&amp;&amp;a[i-1]||i===0||p.isArray(a));if(j)for(;h&lt;i;h++)e=c(a[h],h,d),e!=null&amp;&amp;(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&amp;&amp;(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c==&quot;string&quot;&amp;&amp;(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&amp;&amp;typeof d==&quot;object&quot;){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&amp;&amp;p.isFunction(e),j&amp;&amp;(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k&lt;l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState===&quot;complete&quot;)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener(&quot;DOMContentLoaded&quot;,D,!1),a.addEventListener(&quot;load&quot;,p.ready,!1);else{e.attachEvent(&quot;onreadystatechange&quot;,D),a.attachEvent(&quot;onload&quot;,p.ready);var c=!1;try{c=a.frameElement==null&amp;&amp;e.documentElement}catch(f){}c&amp;&amp;c.doScroll&amp;&amp;function g(){if(!p.isReady){try{c.doScroll(&quot;left&quot;)}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each(&quot;Boolean Number String Function Array Date RegExp Object&quot;.split(&quot; &quot;),function(a,b){E[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a==&quot;string&quot;?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&amp;&amp;[],k=function(b){c=a.memory&amp;&amp;b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&amp;&amp;h&lt;g;h++)if(i[h].apply(b[0],b[1])===!1&amp;&amp;a.stopOnFalse){c=!1;break}e=!1,i&amp;&amp;(j?j.length&amp;&amp;k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e===&quot;function&quot;&amp;&amp;(!a.unique||!l.has(c))?i.push(c):c&amp;&amp;c.length&amp;&amp;e!==&quot;string&quot;&amp;&amp;d(c)})})(arguments),e?g=i.length:c&amp;&amp;(f=b,k(c))}return this},remove:function(){return i&amp;&amp;p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))&gt;-1)i.splice(c,1),e&amp;&amp;(c&lt;=g&amp;&amp;g--,c&lt;=h&amp;&amp;h--)}),this},has:function(a){return p.inArray(a,i)&gt;-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&amp;&amp;(!d||j)&amp;&amp;(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[[&quot;resolve&quot;,&quot;done&quot;,p.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,p.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,p.Callbacks(&quot;memory&quot;)]],c=&quot;pending&quot;,d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&amp;&amp;p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+&quot;With&quot;](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a==&quot;object&quot;?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&amp;&amp;g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+&quot;With&quot;]=g.fireWith}),d.promise(e),a&amp;&amp;a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&amp;&amp;p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length&gt;1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d&gt;1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b&lt;d;b++)c[b]&amp;&amp;p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement(&quot;div&quot;);n.setAttribute(&quot;className&quot;,&quot;t&quot;),n.innerHTML=&quot;  &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href='/a'&gt;a&lt;/a&gt;&lt;input type='checkbox'/&gt;&quot;,c=n.getElementsByTagName(&quot;*&quot;),d=n.getElementsByTagName(&quot;a&quot;)[0],d.style.cssText=&quot;top:1px;float:left;opacity:.5&quot;;if(!c||!c.length||!d)return{};f=e.createElement(&quot;select&quot;),g=f.appendChild(e.createElement(&quot;option&quot;)),h=n.getElementsByTagName(&quot;input&quot;)[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName(&quot;tbody&quot;).length,htmlSerialize:!!n.getElementsByTagName(&quot;link&quot;).length,style:/top/.test(d.getAttribute(&quot;style&quot;)),hrefNormalized:d.getAttribute(&quot;href&quot;)===&quot;/a&quot;,opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value===&quot;on&quot;,optSelected:g.selected,getSetAttribute:n.className!==&quot;t&quot;,enctype:!!e.createElement(&quot;form&quot;).enctype,html5Clone:e.createElement(&quot;nav&quot;).cloneNode(!0).outerHTML!==&quot;&lt;:nav&gt;&lt;/:nav&gt;&quot;,boxModel:e.compatMode===&quot;CSS1Compat&quot;,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&amp;&amp;n.attachEvent&amp;&amp;n.fireEvent&amp;&amp;(n.attachEvent(&quot;onclick&quot;,m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent(&quot;onclick&quot;),n.detachEvent(&quot;onclick&quot;,m)),h=e.createElement(&quot;input&quot;),h.value=&quot;t&quot;,h.setAttribute(&quot;type&quot;,&quot;radio&quot;),b.radioValue=h.value===&quot;t&quot;,h.setAttribute(&quot;checked&quot;,&quot;checked&quot;),h.setAttribute(&quot;name&quot;,&quot;t&quot;),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j=&quot;on&quot;+k,l=j in n,l||(n.setAttribute(j,&quot;return;&quot;),l=typeof n[j]==&quot;function&quot;),b[k+&quot;Bubbles&quot;]=l;return p(function(){var c,d,f,g,h=&quot;padding:0;margin:0;border:0;display:block;overflow:hidden;&quot;,i=e.getElementsByTagName(&quot;body&quot;)[0];if(!i)return;c=e.createElement(&quot;div&quot;),c.style.cssText=&quot;visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px&quot;,i.insertBefore(c,i.firstChild),d=e.createElement(&quot;div&quot;),c.appendChild(d),d.innerHTML=&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;,f=d.getElementsByTagName(&quot;td&quot;),f[0].style.cssText=&quot;padding:0;margin:0;border:0;display:none&quot;,l=f[0].offsetHeight===0,f[0].style.display=&quot;&quot;,f[1].style.display=&quot;none&quot;,b.reliableHiddenOffsets=l&amp;&amp;f[0].offsetHeight===0,d.innerHTML=&quot;&quot;,d.style.cssText=&quot;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;&quot;,b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&amp;&amp;(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!==&quot;1%&quot;,b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:&quot;4px&quot;}).width===&quot;4px&quot;,g=e.createElement(&quot;div&quot;),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width=&quot;0&quot;,d.style.width=&quot;1px&quot;,d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!=&quot;undefined&quot;&amp;&amp;(d.innerHTML=&quot;&quot;,d.style.cssText=h+&quot;width:1px;padding:1px;display:inline;zoom:1&quot;,b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display=&quot;block&quot;,d.style.overflow=&quot;visible&quot;,d.innerHTML=&quot;&lt;div&gt;&lt;/div&gt;&quot;,d.firstChild.style.width=&quot;5px&quot;,b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:&quot;jQuery&quot;+(p.fn.jquery+Math.random()).replace(/\D/g,&quot;&quot;),noData:{embed:!0,object:&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;,applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&amp;&amp;!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c==&quot;string&quot;,j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&amp;&amp;h;if((!l||!k[l]||!e&amp;&amp;!k[l].data)&amp;&amp;i&amp;&amp;d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c==&quot;object&quot;||typeof c==&quot;function&quot;)e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&amp;&amp;(f[p.camelCase(c)]=d),i?(g=f[c],g==null&amp;&amp;(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(&quot; &quot;)));for(e=0,f=b.length;e&lt;f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&amp;&amp;p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&amp;&amp;a.getAttribute(&quot;classid&quot;)===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&amp;&amp;!p._data(i,&quot;parsedAttrs&quot;)){f=i.attributes;for(h=f.length;j&lt;h;j++)g=f[j].name,g.indexOf(&quot;data-&quot;)===0&amp;&amp;(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,&quot;parsedAttrs&quot;,!0)}}return k}return typeof a==&quot;object&quot;?this.each(function(){p.data(this,a)}):(d=a.split(&quot;.&quot;,2),d[1]=d[1]?&quot;.&quot;+d[1]:&quot;&quot;,e=d[1]+&quot;!&quot;,p.access(this,function(c){if(c===b)return k=this.triggerHandler(&quot;getData&quot;+e,[d[0]]),k===b&amp;&amp;i&amp;&amp;(k=p.data(i,a),k=J(i,a,k)),k===b&amp;&amp;d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler(&quot;setData&quot;+e,d),p.data(this,a,c),b.triggerHandler(&quot;changeData&quot;+e,d)})},null,c,arguments.length&gt;1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||&quot;fx&quot;)+&quot;queue&quot;,d=p._data(a,b),c&amp;&amp;(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e===&quot;inprogress&quot;&amp;&amp;(e=c.shift(),d--),e&amp;&amp;(b===&quot;fx&quot;&amp;&amp;c.unshift(&quot;inprogress&quot;),delete f.stop,e.call(a,g,f)),!d&amp;&amp;f&amp;&amp;f.empty.fire()},_queueHooks:function(a,b){var c=b+&quot;queueHooks&quot;;return p._data(a,c)||p._data(a,c,{empty:p.Callbacks(&quot;once memory&quot;).add(function(){p.removeData(a,b+&quot;queue&quot;,!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!=&quot;string&quot;&amp;&amp;(c=a,a=&quot;fx&quot;,d--),arguments.length&lt;d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a===&quot;fx&quot;&amp;&amp;b[0]!==&quot;inprogress&quot;&amp;&amp;p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||&quot;fx&quot;,this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!=&quot;string&quot;&amp;&amp;(c=a,a=b),a=a||&quot;fx&quot;;while(h--)d=p._data(g[h],a+&quot;queueHooks&quot;),d&amp;&amp;d.empty&amp;&amp;(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length&gt;1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length&gt;1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&quot;string&quot;){b=a.split(s);for(c=0,d=this.length;c&lt;d;c++){e=this[c];if(e.nodeType===1)if(!e.className&amp;&amp;b.length===1)e.className=a;else{f=&quot; &quot;+e.className+&quot; &quot;;for(g=0,h=b.length;g&lt;h;g++)~f.indexOf(&quot; &quot;+b[g]+&quot; &quot;)||(f+=b[g]+&quot; &quot;);e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&quot;string&quot;||a===b){c=(a||&quot;&quot;).split(s);for(h=0,i=this.length;h&lt;i;h++){e=this[h];if(e.nodeType===1&amp;&amp;e.className){d=(&quot; &quot;+e.className+&quot; &quot;).replace(O,&quot; &quot;);for(f=0,g=c.length;f&lt;g;f++)while(d.indexOf(&quot; &quot;+c[f]+&quot; &quot;)&gt;-1)d=d.replace(&quot; &quot;+c[f]+&quot; &quot;,&quot; &quot;);e.className=a?p.trim(d):&quot;&quot;}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b==&quot;boolean&quot;;return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c===&quot;string&quot;){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?&quot;addClass&quot;:&quot;removeClass&quot;](e)}else if(c===&quot;undefined&quot;||c===&quot;boolean&quot;)this.className&amp;&amp;p._data(this,&quot;__className__&quot;,this.className),this.className=this.className||a===!1?&quot;&quot;:p._data(this,&quot;__className__&quot;)||&quot;&quot;})},hasClass:function(a){var b=&quot; &quot;+a+&quot; &quot;,c=0,d=this.length;for(;c&lt;d;c++)if(this[c].nodeType===1&amp;&amp;(&quot; &quot;+this[c].className+&quot; &quot;).replace(O,&quot; &quot;).indexOf(b)&gt;-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&amp;&amp;&quot;get&quot;in c&amp;&amp;(d=c.get(f,&quot;value&quot;))!==b?d:(d=f.value,typeof d==&quot;string&quot;?d.replace(P,&quot;&quot;):d==null?&quot;&quot;:d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f=&quot;&quot;:typeof f==&quot;number&quot;?f+=&quot;&quot;:p.isArray(f)&amp;&amp;(f=p.map(f,function(a){return a==null?&quot;&quot;:a+&quot;&quot;})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!(&quot;set&quot;in c)||c.set(this,f,&quot;value&quot;)===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type===&quot;select-one&quot;;if(f&lt;0)return null;c=i?f:0,d=i?f+1:h.length;for(;c&lt;d;c++){e=h[c];if(e.selected&amp;&amp;(p.support.optDisabled?!e.disabled:e.getAttribute(&quot;disabled&quot;)===null)&amp;&amp;(!e.parentNode.disabled||!p.nodeName(e.parentNode,&quot;optgroup&quot;))){b=p(e).val();if(i)return b;g.push(b)}}return i&amp;&amp;!g.length&amp;&amp;h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find(&quot;option&quot;).each(function(){this.selected=p.inArray(p(this).val(),c)&gt;=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&amp;&amp;p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute==&quot;undefined&quot;)return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&amp;&amp;(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&amp;&amp;&quot;set&quot;in g&amp;&amp;h&amp;&amp;(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,&quot;&quot;+d),d)}return g&amp;&amp;&quot;get&quot;in g&amp;&amp;h&amp;&amp;(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&amp;&amp;a.nodeType===1){d=b.split(s);for(;g&lt;d.length;g++)e=d[g],e&amp;&amp;(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,&quot;&quot;),a.removeAttribute(U?e:c),f&amp;&amp;c in a&amp;&amp;(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&amp;&amp;a.parentNode)p.error(&quot;type property can't be changed&quot;);else if(!p.support.radioValue&amp;&amp;b===&quot;radio&quot;&amp;&amp;p.nodeName(a,&quot;input&quot;)){var c=a.value;return a.setAttribute(&quot;type&quot;,b),c&amp;&amp;(a.value=c),b}}},value:{get:function(a,b){return L&amp;&amp;p.nodeName(a,&quot;button&quot;)?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&amp;&amp;p.nodeName(a,&quot;button&quot;))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:&quot;tabIndex&quot;,readonly:&quot;readOnly&quot;,&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,cellpadding:&quot;cellPadding&quot;,rowspan:&quot;rowSpan&quot;,colspan:&quot;colSpan&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;,contenteditable:&quot;contentEditable&quot;},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&amp;&amp;(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&amp;&amp;&quot;set&quot;in f&amp;&amp;(e=f.set(a,d,c))!==b?e:a[c]=d:f&amp;&amp;&quot;get&quot;in f&amp;&amp;(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode(&quot;tabindex&quot;);return c&amp;&amp;c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&amp;&amp;a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!=&quot;boolean&quot;&amp;&amp;(d=a.getAttributeNode(c))&amp;&amp;d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&amp;&amp;(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&amp;&amp;(N[c]?d.value!==&quot;&quot;:d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+&quot;&quot;}},p.each([&quot;width&quot;,&quot;height&quot;],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c===&quot;&quot;)return a.setAttribute(b,&quot;auto&quot;),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===&quot;&quot;&amp;&amp;(b=&quot;false&quot;),L.set(a,b,c)}}),p.support.hrefNormalized||p.each([&quot;href&quot;,&quot;src&quot;,&quot;width&quot;,&quot;height&quot;],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=&quot;&quot;+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&amp;&amp;(b.selectedIndex,b.parentNode&amp;&amp;b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype=&quot;encoding&quot;),p.support.checkOn||p.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){p.valHooks[this]={get:function(a){return a.getAttribute(&quot;value&quot;)===null?&quot;on&quot;:a.value}}}),p.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)&gt;=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,&quot;mouseenter$1 mouseleave$1&quot;)};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&amp;&amp;(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!=&quot;undefined&quot;&amp;&amp;(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(&quot; &quot;);for(j=0;j&lt;c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||&quot;&quot;).split(&quot;.&quot;).sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(&quot;.&quot;)},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&amp;&amp;a.attachEvent(&quot;on&quot;+l,h)}r.add&amp;&amp;(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&amp;&amp;p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||&quot;&quot;)).split(&quot; &quot;);for(f=0;f&lt;b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp(&quot;(^|\\.)&quot;+j.split(&quot;.&quot;).sort().join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null;for(l=0;l&lt;o.length;l++)q=o[l],(e||i===q.origType)&amp;&amp;(!c||c.guid===q.guid)&amp;&amp;(!j||j.test(q.namespace))&amp;&amp;(!d||d===q.selector||d===&quot;**&quot;&amp;&amp;q.selector)&amp;&amp;(o.splice(l--,1),q.selector&amp;&amp;o.delegateCount--,n.remove&amp;&amp;n.remove.call(a,q));o.length===0&amp;&amp;k!==o.length&amp;&amp;((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&amp;&amp;p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&amp;&amp;(delete r.handle,p.removeData(a,&quot;events&quot;,!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&amp;&amp;f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf(&quot;!&quot;)&gt;=0&amp;&amp;(s=s.slice(0,-1),i=!0),s.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(t=s.split(&quot;.&quot;),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&amp;&amp;!p.event.global[s])return;c=typeof c==&quot;object&quot;?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join(&quot;.&quot;),c.namespace_re=c.namespace?new RegExp(&quot;(^|\\.)&quot;+t.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,m=s.indexOf(&quot;:&quot;)&lt;0?&quot;on&quot;+s:&quot;&quot;;if(!f){h=p.cache;for(j in h)h[j].events&amp;&amp;h[j].events[s]&amp;&amp;p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&amp;&amp;n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&amp;&amp;!n.noBubble&amp;&amp;!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&amp;&amp;q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j&lt;q.length&amp;&amp;!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,&quot;events&quot;)||{})[c.type]&amp;&amp;p._data(k,&quot;handle&quot;),o&amp;&amp;o.apply(k,d),o=m&amp;&amp;k[m],o&amp;&amp;p.acceptData(k)&amp;&amp;o.apply(k,d)===!1&amp;&amp;c.preventDefault();return c.type=s,!g&amp;&amp;!c.isDefaultPrevented()&amp;&amp;(!n._default||n._default.apply(f.ownerDocument,d)===!1)&amp;&amp;(s!==&quot;click&quot;||!p.nodeName(f,&quot;a&quot;))&amp;&amp;p.acceptData(f)&amp;&amp;m&amp;&amp;f[s]&amp;&amp;(s!==&quot;focus&quot;&amp;&amp;s!==&quot;blur&quot;||c.target.offsetWidth!==0)&amp;&amp;!p.isWindow(f)&amp;&amp;(l=f[m],l&amp;&amp;(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&amp;&amp;(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(p._data(this,&quot;events&quot;)||{})[c.type]||[],o=n.delegateCount,q=[].slice.call(arguments),r=!c.exclusive&amp;&amp;!c.namespace,s=p.event.special[c.type]||{},t=[];q[0]=c,c.delegateTarget=this;if(s.preDispatch&amp;&amp;s.preDispatch.call(this,c)===!1)return;if(o&amp;&amp;(!c.button||c.type!==&quot;click&quot;))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!==&quot;click&quot;){h={},j=[];for(d=0;d&lt;o;d++)k=n[d],l=k.selector,h[l]===b&amp;&amp;(h[l]=p(l,this).index(f)&gt;=0),h[l]&amp;&amp;j.push(k);j.length&amp;&amp;t.push({elem:f,matches:j})}n.length&gt;o&amp;&amp;t.push({elem:this,matches:n.slice(o)});for(d=0;d&lt;t.length&amp;&amp;!c.isPropagationStopped();d++){i=t[d],c.currentTarget=i.elem;for(e=0;e&lt;i.matches.length&amp;&amp;!c.isImmediatePropagationStopped();e++){k=i.matches[e];if(r||!c.namespace&amp;&amp;!k.namespace||c.namespace_re&amp;&amp;c.namespace_re.test(k.namespace))c.data=k.data,c.handleObj=k,g=((p.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,q),g!==b&amp;&amp;(c.result=g,g===!1&amp;&amp;(c.preventDefault(),c.stopPropagation()))}}return s.postDispatch&amp;&amp;s.postDispatch.call(this,c),c.result},props:&quot;attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(a,b){return a.which==null&amp;&amp;(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:&quot;button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&amp;&amp;c.clientX!=null&amp;&amp;(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&amp;&amp;f.scrollLeft||g&amp;&amp;g.scrollLeft||0)-(f&amp;&amp;f.clientLeft||g&amp;&amp;g.clientLeft||0),a.pageY=c.clientY+(f&amp;&amp;f.scrollTop||g&amp;&amp;g.scrollTop||0)-(f&amp;&amp;f.clientTop||g&amp;&amp;g.clientTop||0)),!a.relatedTarget&amp;&amp;i&amp;&amp;(a.relatedTarget=i===a.target?c.toElement:i),!a.which&amp;&amp;h!==b&amp;&amp;(a.which=h&amp;1?1:h&amp;2?3:h&amp;4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&amp;&amp;(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:&quot;focusin&quot;},blur:{delegateType:&quot;focusout&quot;},beforeunload:{setup:function(a,b,c){p.isWindow(this)&amp;&amp;(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&amp;&amp;(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&amp;&amp;c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)}:function(a,b,c){var d=&quot;on&quot;+b;a.detachEvent&amp;&amp;(typeof a[d]==&quot;undefined&quot;&amp;&amp;(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&amp;&amp;a.getPreventDefault()?bb:ba):this.type=a,b&amp;&amp;p.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&amp;&amp;a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&amp;&amp;!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,&quot;form&quot;))return!1;p.event.add(this,&quot;click._submit keypress._submit&quot;,function(a){var c=a.target,d=p.nodeName(c,&quot;input&quot;)||p.nodeName(c,&quot;button&quot;)?c.form:b;d&amp;&amp;!p._data(d,&quot;_submit_attached&quot;)&amp;&amp;(p.event.add(d,&quot;submit._submit&quot;,function(a){a._submit_bubble=!0}),p._data(d,&quot;_submit_attached&quot;,!0))})},postDispatch:function(a){a._submit_bubble&amp;&amp;(delete a._submit_bubble,this.parentNode&amp;&amp;!a.isTrigger&amp;&amp;p.event.simulate(&quot;submit&quot;,this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,&quot;form&quot;))return!1;p.event.remove(this,&quot;._submit&quot;)}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type===&quot;checkbox&quot;||this.type===&quot;radio&quot;)p.event.add(this,&quot;propertychange._change&quot;,function(a){a.originalEvent.propertyName===&quot;checked&quot;&amp;&amp;(this._just_changed=!0)}),p.event.add(this,&quot;click._change&quot;,function(a){this._just_changed&amp;&amp;!a.isTrigger&amp;&amp;(this._just_changed=!1),p.event.simulate(&quot;change&quot;,this,a,!0)});return!1}p.event.add(this,&quot;beforeactivate._change&quot;,function(a){var b=a.target;V.test(b.nodeName)&amp;&amp;!p._data(b,&quot;_change_attached&quot;)&amp;&amp;(p.event.add(b,&quot;change._change&quot;,function(a){this.parentNode&amp;&amp;!a.isSimulated&amp;&amp;!a.isTrigger&amp;&amp;p.event.simulate(&quot;change&quot;,this.parentNode,a,!0)}),p._data(b,&quot;_change_attached&quot;,!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!==&quot;radio&quot;&amp;&amp;b.type!==&quot;checkbox&quot;)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,&quot;._change&quot;),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&amp;&amp;e.addEventListener(a,d,!0)},teardown:function(){--c===0&amp;&amp;e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a==&quot;object&quot;){typeof c!=&quot;string&quot;&amp;&amp;(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&amp;&amp;e==null?(e=c,d=c=b):e==null&amp;&amp;(typeof c==&quot;string&quot;?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&amp;&amp;(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+&quot;.&quot;+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a==&quot;object&quot;){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c==&quot;function&quot;)d=c,c=b;return d===!1&amp;&amp;(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||&quot;**&quot;,b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,&quot;**&quot;):this.off(b,a||&quot;**&quot;,c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,&quot;lastToggle&quot;+a.guid)||0)%d;return p._data(this,&quot;lastToggle&quot;+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d&lt;b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(a,b){p.fn[b]=function(a,c){return c==null&amp;&amp;(c=a,a=null),arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&amp;&amp;(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&amp;&amp;(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function $(a,b,c,d){c=c||[],b=b||q;var e,f,g,j,k=b.nodeType;if(k!==1&amp;&amp;k!==9)return[];if(!a||typeof a!=&quot;string&quot;)return c;g=h(b);if(!g&amp;&amp;!d)if(e=L.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&amp;&amp;(f=b.ownerDocument.getElementById(j))&amp;&amp;i(b,f)&amp;&amp;f.id===j)return c.push(f),c}else{if(e[2])return u.apply(c,t.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&amp;&amp;X&amp;&amp;b.getElementsByClassName)return u.apply(c,t.call(b.getElementsByClassName(j),0)),c}return bk(a,b,c,d,g)}function _(a){return function(b){var c=b.nodeName.toLowerCase();return c===&quot;input&quot;&amp;&amp;b.type===a}}function ba(a){return function(b){var c=b.nodeName.toLowerCase();return(c===&quot;input&quot;||c===&quot;button&quot;)&amp;&amp;b.type===a}}function bb(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bc(a,b,c,d){var e,g,h,i,j,k,l,m,n,p,r=!c&amp;&amp;b!==q,s=(r?&quot;&lt;s&gt;&quot;:&quot;&quot;)+a.replace(H,&quot;$1&lt;s&gt;&quot;),u=y[o][s];if(u)return d?0:t.call(u,0);j=a,k=[],m=0,n=f.preFilter,p=f.filter;while(j){if(!e||(g=I.exec(j)))g&amp;&amp;(j=j.slice(g[0].length),h.selector=l),k.push(h=[]),l=&quot;&quot;,r&amp;&amp;(j=&quot; &quot;+j);e=!1;if(g=J.exec(j))l+=g[0],j=j.slice(g[0].length),e=h.push({part:g.pop().replace(H,&quot; &quot;),string:g[0],captures:g});for(i in p)(g=S[i].exec(j))&amp;&amp;(!n[i]||(g=n[i](g,b,c)))&amp;&amp;(l+=g[0],j=j.slice(g[0].length),e=h.push({part:i,string:g.shift(),captures:g}));if(!e)break}return l&amp;&amp;(h.selector=l),d?j.length:j?$.error(a):t.call(y(s,k),0)}function bd(a,b,e,f){var g=b.dir,h=s++;return a||(a=function(a){return a===e}),b.first?function(b){while(b=b[g])if(b.nodeType===1)return a(b)&amp;&amp;b}:f?function(b){while(b=b[g])if(b.nodeType===1&amp;&amp;a(b))return b}:function(b){var e,f=h+&quot;.&quot;+c,i=f+&quot;.&quot;+d;while(b=b[g])if(b.nodeType===1){if((e=b[o])===i)return b.sizset;if(typeof e==&quot;string&quot;&amp;&amp;e.indexOf(f)===0){if(b.sizset)return b}else{b[o]=i;if(a(b))return b.sizset=!0,b;b.sizset=!1}}}}function be(a,b){return a?function(c){var d=b(c);return d&amp;&amp;a(d===!0?c:d)}:b}function bf(a,b,c){var d,e,g=0;for(;d=a[g];g++)f.relative[d.part]?e=bd(e,f.relative[d.part],b,c):e=be(e,f.filter[d.part].apply(null,d.captures.concat(b,c)));return e}function bg(a){return function(b){var c,d=0;for(;c=a[d];d++)if(c(b))return!0;return!1}}function bh(a,b,c,d){var e=0,f=b.length;for(;e&lt;f;e++)$(a,b[e],c,d)}function bi(a,b,c,d,e,g){var h,i=f.setFilters[b.toLowerCase()];return i||$.error(b),(a||!(h=e))&amp;&amp;bh(a||&quot;*&quot;,d,h=[],e),h.length&gt;0?i(h,c,g):[]}function bj(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=a.length,v=S.POS,w=new RegExp(&quot;^&quot;+v.source+&quot;(?!&quot;+A+&quot;)&quot;,&quot;i&quot;),x=function(){var a=1,c=arguments.length-2;for(;a&lt;c;a++)arguments[a]===b&amp;&amp;(n[a]=b)};for(;s&lt;t;s++){f=a[s],g=&quot;&quot;,m=e;for(h=0,i=f.length;h&lt;i;h++){j=f[h],k=j.string;if(j.part===&quot;PSEUDO&quot;){v.exec(&quot;&quot;),l=0;while(n=v.exec(k)){o=!0,p=v.lastIndex=n.index+n[0].length;if(p&gt;l){g+=k.slice(l,n.index),l=p,q=[c],J.test(g)&amp;&amp;(m&amp;&amp;(q=m),m=e);if(r=O.test(g))g=g.slice(0,-5).replace(J,&quot;$&amp;*&quot;),l++;n.length&gt;1&amp;&amp;n[0].replace(w,x),m=bi(g,n[1],n[2],q,m,r)}g=&quot;&quot;}}o||(g+=k),o=!1}g?J.test(g)?bh(g,m||[c],d,e):$(g,c,d,e?e.concat(m):m):u.apply(d,m)}return t===1?d:$.uniqueSort(d)}function bk(a,b,e,g,h){a=a.replace(H,&quot;$1&quot;);var i,k,l,m,n,o,p,q,r,s,v=bc(a,b,h),w=b.nodeType;if(S.POS.test(a))return bj(v,b,e,g);if(g)i=t.call(g,0);else if(v.length===1){if((o=t.call(v[0],0)).length&gt;2&amp;&amp;(p=o[0]).part===&quot;ID&quot;&amp;&amp;w===9&amp;&amp;!h&amp;&amp;f.relative[o[1].part]){b=f.find.ID(p.captures[0].replace(R,&quot;&quot;),b,h)[0];if(!b)return e;a=a.slice(o.shift().string.length)}r=(v=N.exec(o[0].string))&amp;&amp;!v.index&amp;&amp;b.parentNode||b,q=&quot;&quot;;for(n=o.length-1;n&gt;=0;n--){p=o[n],s=p.part,q=p.string+q;if(f.relative[s])break;if(f.order.test(s)){i=f.find[s](p.captures[0].replace(R,&quot;&quot;),r,h);if(i==null)continue;a=a.slice(0,a.length-q.length)+q.replace(S[s],&quot;&quot;),a||u.apply(e,t.call(i,0));break}}}if(a){k=j(a,b,h),c=k.dirruns++,i==null&amp;&amp;(i=f.find.TAG(&quot;*&quot;,N.test(a)&amp;&amp;b.parentNode||b));for(n=0;m=i[n];n++)d=k.runs++,k(m)&amp;&amp;e.push(m)}return e}var c,d,e,f,g,h,i,j,k,l,m=!0,n=&quot;undefined&quot;,o=(&quot;sizcache&quot;+Math.random()).replace(&quot;.&quot;,&quot;&quot;),q=a.document,r=q.documentElement,s=0,t=[].slice,u=[].push,v=function(a,b){return a[o]=b||!0,a},w=function(){var a={},b=[];return v(function(c,d){return b.push(c)&gt;f.cacheLength&amp;&amp;delete a[b.shift()],a[c]=d},a)},x=w(),y=w(),z=w(),A=&quot;[\\x20\\t\\r\\n\\f]&quot;,B=&quot;(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+&quot;,C=B.replace(&quot;w&quot;,&quot;w#&quot;),D=&quot;([*^$|!~]?=)&quot;,E=&quot;\\[&quot;+A+&quot;*(&quot;+B+&quot;)&quot;+A+&quot;*(?:&quot;+D+A+&quot;*(?:(['\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;+C+&quot;)|)|)&quot;+A+&quot;*\\]&quot;,F=&quot;:(&quot;+B+&quot;)(?:\\((?:(['\&quot;])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:&quot;+E+&quot;)|[^:]|\\\\.)*|.*))\\)|)&quot;,G=&quot;:(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)&quot;,H=new RegExp(&quot;^&quot;+A+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+A+&quot;+$&quot;,&quot;g&quot;),I=new RegExp(&quot;^&quot;+A+&quot;*,&quot;+A+&quot;*&quot;),J=new RegExp(&quot;^&quot;+A+&quot;*([\\x20\\t\\r\\n\\f&gt;+~])&quot;+A+&quot;*&quot;),K=new RegExp(F),L=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/^:not/,N=/[\x20\t\r\n\f]*[+~]/,O=/:not\($/,P=/h\d/i,Q=/input|select|textarea|button/i,R=/\\(?!\\)/g,S={ID:new RegExp(&quot;^#(&quot;+B+&quot;)&quot;),CLASS:new RegExp(&quot;^\\.(&quot;+B+&quot;)&quot;),NAME:new RegExp(&quot;^\\[name=['\&quot;]?(&quot;+B+&quot;)['\&quot;]?\\]&quot;),TAG:new RegExp(&quot;^(&quot;+B.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:new RegExp(&quot;^&quot;+E),PSEUDO:new RegExp(&quot;^&quot;+F),CHILD:new RegExp(&quot;^:(only|nth|last|first)-child(?:\\(&quot;+A+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+A+&quot;*(?:([+-]|)&quot;+A+&quot;*(\\d+)|))&quot;+A+&quot;*\\)|)&quot;,&quot;i&quot;),POS:new RegExp(G,&quot;ig&quot;),needsContext:new RegExp(&quot;^&quot;+A+&quot;*[&gt;+~]|&quot;+G,&quot;i&quot;)},T=function(a){var b=q.createElement(&quot;div&quot;);try{return a(b)}catch(c){return!1}finally{b=null}},U=T(function(a){return a.appendChild(q.createComment(&quot;&quot;)),!a.getElementsByTagName(&quot;*&quot;).length}),V=T(function(a){return a.innerHTML=&quot;&lt;a href='#'&gt;&lt;/a&gt;&quot;,a.firstChild&amp;&amp;typeof a.firstChild.getAttribute!==n&amp;&amp;a.firstChild.getAttribute(&quot;href&quot;)===&quot;#&quot;}),W=T(function(a){a.innerHTML=&quot;&lt;select&gt;&lt;/select&gt;&quot;;var b=typeof a.lastChild.getAttribute(&quot;multiple&quot;);return b!==&quot;boolean&quot;&amp;&amp;b!==&quot;string&quot;}),X=T(function(a){return a.innerHTML=&quot;&lt;div class='hidden e'&gt;&lt;/div&gt;&lt;div class='hidden'&gt;&lt;/div&gt;&quot;,!a.getElementsByClassName||!a.getElementsByClassName(&quot;e&quot;).length?!1:(a.lastChild.className=&quot;e&quot;,a.getElementsByClassName(&quot;e&quot;).length===2)}),Y=T(function(a){a.id=o+0,a.innerHTML=&quot;&lt;a name='&quot;+o+&quot;'&gt;&lt;/a&gt;&lt;div name='&quot;+o+&quot;'&gt;&lt;/div&gt;&quot;,r.insertBefore(a,r.firstChild);var b=q.getElementsByName&amp;&amp;q.getElementsByName(o).length===2+q.getElementsByName(o+0).length;return e=!q.getElementById(o),r.removeChild(a),b});try{t.call(r.childNodes,0)[0].nodeType}catch(Z){t=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}$.matches=function(a,b){return $(a,null,null,b)},$.matchesSelector=function(a,b){return $(b,null,null,[a]).length&gt;0},g=$.getText=function(a){var b,c=&quot;&quot;,d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent==&quot;string&quot;)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=g(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=g(b);return c},h=$.isXML=function(a){var b=a&amp;&amp;(a.ownerDocument||a).documentElement;return b?b.nodeName!==&quot;HTML&quot;:!1},i=$.contains=r.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&amp;&amp;b.parentNode;return a===d||!!(d&amp;&amp;d.nodeType===1&amp;&amp;c.contains&amp;&amp;c.contains(d))}:r.compareDocumentPosition?function(a,b){return b&amp;&amp;!!(a.compareDocumentPosition(b)&amp;16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},$.attr=function(a,b){var c,d=h(a);return d||(b=b.toLowerCase()),f.attrHandle[b]?f.attrHandle[b](a):W||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]==&quot;boolean&quot;?a[b]?b:null:c.specified?c.value:null:null)},f=$.selectors={cacheLength:50,createPseudo:v,match:S,order:new RegExp(&quot;ID|TAG&quot;+(Y?&quot;|NAME&quot;:&quot;&quot;)+(X?&quot;|CLASS&quot;:&quot;&quot;)),attrHandle:V?{}:{href:function(a){return a.getAttribute(&quot;href&quot;,2)},type:function(a){return a.getAttribute(&quot;type&quot;)}},find:{ID:e?function(a,b,c){if(typeof b.getElementById!==n&amp;&amp;!c){var d=b.getElementById(a);return d&amp;&amp;d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&amp;&amp;!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&amp;&amp;e.getAttributeNode(&quot;id&quot;).value===a?[e]:b:[]}},TAG:U?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a===&quot;*&quot;){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&amp;&amp;e.push(d);return e}return c},NAME:function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:function(a,b,c){if(typeof b.getElementsByClassName!==n&amp;&amp;!c)return b.getElementsByClassName(a)}},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(R,&quot;&quot;),a[3]=(a[4]||a[5]||&quot;&quot;).replace(R,&quot;&quot;),a[2]===&quot;~=&quot;&amp;&amp;(a[3]=&quot; &quot;+a[3]+&quot; &quot;),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]===&quot;nth&quot;?(a[2]||$.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]===&quot;even&quot;||a[2]===&quot;odd&quot;)),a[4]=+(a[6]+a[7]||a[2]===&quot;odd&quot;)):a[2]&amp;&amp;$.error(a[0]),a},PSEUDO:function(a,b,c){var d,e;if(S.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(d=a[4])K.test(d)&amp;&amp;(e=bc(d,b,c,!0))&amp;&amp;(e=d.indexOf(&quot;)&quot;,d.length-e)-d.length)&amp;&amp;(d=d.slice(0,e),a[0]=a[0].slice(0,e)),a[2]=d;return a.slice(0,3)}},filter:{ID:e?function(a){return a=a.replace(R,&quot;&quot;),function(b){return b.getAttribute(&quot;id&quot;)===a}}:function(a){return a=a.replace(R,&quot;&quot;),function(b){var c=typeof b.getAttributeNode!==n&amp;&amp;b.getAttributeNode(&quot;id&quot;);return c&amp;&amp;c.value===a}},TAG:function(a){return a===&quot;*&quot;?function(){return!0}:(a=a.replace(R,&quot;&quot;).toLowerCase(),function(b){return b.nodeName&amp;&amp;b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=x[o][a];return b||(b=x(a,new RegExp(&quot;(^|&quot;+A+&quot;)&quot;+a+&quot;(&quot;+A+&quot;|$)&quot;))),function(a){return b.test(a.className||typeof a.getAttribute!==n&amp;&amp;a.getAttribute(&quot;class&quot;)||&quot;&quot;)}},ATTR:function(a,b,c){return b?function(d){var e=$.attr(d,a),f=e+&quot;&quot;;if(e==null)return b===&quot;!=&quot;;switch(b){case&quot;=&quot;:return f===c;case&quot;!=&quot;:return f!==c;case&quot;^=&quot;:return c&amp;&amp;f.indexOf(c)===0;case&quot;*=&quot;:return c&amp;&amp;f.indexOf(c)&gt;-1;case&quot;$=&quot;:return c&amp;&amp;f.substr(f.length-c.length)===c;case&quot;~=&quot;:return(&quot; &quot;+f+&quot; &quot;).indexOf(c)&gt;-1;case&quot;|=&quot;:return f===c||f.substr(0,c.length+1)===c+&quot;-&quot;}}:function(b){return $.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a===&quot;nth&quot;){var e=s++;return function(a){var b,f,g=0,h=a;if(c===1&amp;&amp;d===0)return!0;b=a.parentNode;if(b&amp;&amp;(b[o]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[o]=e}return f=a.sizset-d,c===0?f===0:f%c===0&amp;&amp;f/c&gt;=0}}return function(b){var c=b;switch(a){case&quot;only&quot;:case&quot;first&quot;:while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a===&quot;first&quot;)return!0;c=b;case&quot;last&quot;:while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e,g=f.pseudos[a]||f.pseudos[a.toLowerCase()];return g||$.error(&quot;unsupported pseudo: &quot;+a),g[o]?g(b,c,d):g.length&gt;1?(e=[a,a,&quot;&quot;,b],function(a){return g(a,0,e)}):g}},pseudos:{not:v(function(a,b,c){var d=j(a.replace(H,&quot;$1&quot;),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b===&quot;input&quot;&amp;&amp;!!a.checked||b===&quot;option&quot;&amp;&amp;!!a.selected},selected:function(a){return a.parentNode&amp;&amp;a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!f.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName&gt;&quot;@&quot;||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:v(function(a){return function(b){return(b.textContent||b.innerText||g(b)).indexOf(a)&gt;-1}}),has:v(function(a){return function(b){return $(a,b).length&gt;0}}),header:function(a){return P.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;(b=a.type)===&quot;text&quot;&amp;&amp;((c=a.getAttribute(&quot;type&quot;))==null||c.toLowerCase()===b)},radio:_(&quot;radio&quot;),checkbox:_(&quot;checkbox&quot;),file:_(&quot;file&quot;),password:_(&quot;password&quot;),image:_(&quot;image&quot;),submit:ba(&quot;submit&quot;),reset:ba(&quot;reset&quot;),button:function(a){var b=a.nodeName.toLowerCase();return b===&quot;input&quot;&amp;&amp;a.type===&quot;button&quot;||b===&quot;button&quot;},input:function(a){return Q.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&amp;&amp;(!b.hasFocus||b.hasFocus())&amp;&amp;(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e&lt;f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e&lt;f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}},k=r.compareDocumentPosition?function(a,b){return a===b?(l=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&amp;4)?-1:1}:function(a,b){if(a===b)return l=!0,0;if(a.sourceIndex&amp;&amp;b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bb(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j&lt;c&amp;&amp;j&lt;d;j++)if(e[j]!==f[j])return bb(e[j],f[j]);return j===c?bb(a,f[j],-1):bb(e[j],b,1)},[0,0].sort(k),m=!l,$.uniqueSort=function(a){var b,c=1;l=m,a.sort(k);if(l)for(;b=a[c];c++)b===a[c-1]&amp;&amp;a.splice(c--,1);return a},$.error=function(a){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+a)},j=$.compile=function(a,b,c){var d,e,f,g=z[o][a];if(g&amp;&amp;g.context===b)return g;d=bc(a,b,c);for(e=0,f=d.length;e&lt;f;e++)d[e]=bf(d[e],b,c);return g=z(a,bg(d)),g.context=b,g.runs=g.dirruns=0,g},q.querySelectorAll&amp;&amp;function(){var a,b=bk,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'&quot;\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[&quot;:active&quot;],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;T(function(a){a.innerHTML=&quot;&lt;select&gt;&lt;option selected=''&gt;&lt;/option&gt;&lt;/select&gt;&quot;,a.querySelectorAll(&quot;[selected]&quot;).length||e.push(&quot;\\[&quot;+A+&quot;*(?:checked|disabled|ismap|multiple|readonly|selected|value)&quot;),a.querySelectorAll(&quot;:checked&quot;).length||e.push(&quot;:checked&quot;)}),T(function(a){a.innerHTML=&quot;&lt;p test=''&gt;&lt;/p&gt;&quot;,a.querySelectorAll(&quot;[test^='']&quot;).length&amp;&amp;e.push(&quot;[*^$]=&quot;+A+&quot;*(?:\&quot;\&quot;|'')&quot;),a.innerHTML=&quot;&lt;input type='hidden'/&gt;&quot;,a.querySelectorAll(&quot;:enabled&quot;).length||e.push(&quot;:enabled&quot;,&quot;:disabled&quot;)}),e=e.length&amp;&amp;new RegExp(e.join(&quot;|&quot;)),bk=function(a,d,f,g,h){if(!g&amp;&amp;!h&amp;&amp;(!e||!e.test(a)))if(d.nodeType===9)try{return u.apply(f,t.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&amp;&amp;d.nodeName.toLowerCase()!==&quot;object&quot;){var j,k,l,m=d.getAttribute(&quot;id&quot;),n=m||o,p=N.test(a)&amp;&amp;d.parentNode||d;m?n=n.replace(c,&quot;\\$&amp;&quot;):d.setAttribute(&quot;id&quot;,n),j=bc(a,d,h),n=&quot;[id='&quot;+n+&quot;']&quot;;for(k=0,l=j.length;k&lt;l;k++)j[k]=n+j[k].selector;try{return u.apply(f,t.call(p.querySelectorAll(j.join(&quot;,&quot;)),0)),f}catch(i){}finally{m||d.removeAttribute(&quot;id&quot;)}}return b(a,d,f,g,h)},g&amp;&amp;(T(function(b){a=g.call(b,&quot;div&quot;);try{g.call(b,&quot;[test!='']:sizzle&quot;),f.push(S.PSEUDO.source,S.POS.source,&quot;!=&quot;)}catch(c){}}),f=new RegExp(f.join(&quot;|&quot;)),$.matchesSelector=function(b,c){c=c.replace(d,&quot;='$1']&quot;);if(!h(b)&amp;&amp;!f.test(c)&amp;&amp;(!e||!e.test(c)))try{var i=g.call(b,c);if(i||a||b.document&amp;&amp;b.document.nodeType!==11)return i}catch(j){}return $(c,null,null,[b]).length&gt;0})}(),f.setFilters.nth=f.setFilters.eq,f.filters=f.pseudos,$.attr=p.attr,p.find=$,p.expr=$.selectors,p.expr[&quot;:&quot;]=p.expr.pseudos,p.unique=$.uniqueSort,p.text=$.getText,p.isXMLDoc=$.isXML,p.contains=$.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!=&quot;string&quot;)return p(a).filter(function(){for(b=0,c=h.length;b&lt;c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack(&quot;&quot;,&quot;find&quot;,a);for(b=0,c=this.length;b&lt;c;b++){d=g.length,p.find(a,this[b],g);if(b&gt;0)for(e=d;e&lt;g.length;e++)for(f=0;f&lt;d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b&lt;d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),&quot;not&quot;,a)},filter:function(a){return this.pushStack(bj(this,a,!0),&quot;filter&quot;,a)},is:function(a){return!!a&amp;&amp;(typeof a==&quot;string&quot;?bf.test(a)?p(a,this.context).index(this[0])&gt;=0:p.filter(a,this).length&gt;0:this.filter(a).length&gt;0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!=&quot;string&quot;?p(a,b||this.context):0;for(;d&lt;e;d++){c=this[d];while(c&amp;&amp;c.ownerDocument&amp;&amp;c!==b&amp;&amp;c.nodeType!==11){if(g?g.index(c)&gt;-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length&gt;1?p.unique(f):f,this.pushStack(f,&quot;closest&quot;,a)},index:function(a){return a?typeof a==&quot;string&quot;?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&amp;&amp;this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a==&quot;string&quot;?p(a,b):p.makeArray(a&amp;&amp;a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;b.nodeType!==11?b:null},parents:function(a){return p.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return p.dir(a,&quot;parentNode&quot;,c)},next:function(a){return bi(a,&quot;nextSibling&quot;)},prev:function(a){return bi(a,&quot;previousSibling&quot;)},nextAll:function(a){return p.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return p.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return p.dir(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return p.dir(a,&quot;previousSibling&quot;,c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,&quot;iframe&quot;)?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&amp;&amp;typeof d==&quot;string&quot;&amp;&amp;(e=p.filter(d,e)),e=this.length&gt;1&amp;&amp;!bg[a]?p.unique(e):e,this.length&gt;1&amp;&amp;bd.test(a)&amp;&amp;(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(&quot;,&quot;))}}),p.extend({filter:function(a,b,c){return c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&amp;&amp;f.nodeType!==9&amp;&amp;(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&amp;&amp;e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&amp;&amp;a!==b&amp;&amp;c.push(a);return c}});var bl=&quot;abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video&quot;,bm=/ jQuery\d+=&quot;(?:null|\d+)&quot;/g,bn=/^\s+/,bo=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,bp=/&lt;([\w:]+)/,bq=/&lt;tbody/i,br=/&lt;|&amp;#?\w+;/,bs=/&lt;(?:script|style|link)/i,bt=/&lt;(?:script|object|embed|option|style)/i,bu=new RegExp(&quot;&lt;(?:&quot;+bl+&quot;)[\\s/&gt;]&quot;,&quot;i&quot;),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*&lt;!(?:\[CDATA\[|\-\-)|[\]\-]{2}&gt;\s*$/g,bz={option:[1,&quot;&lt;select multiple='multiple'&gt;&quot;,&quot;&lt;/select&gt;&quot;],legend:[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],area:[1,&quot;&lt;map&gt;&quot;,&quot;&lt;/map&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]},bA=bk(e),bB=bA.appendChild(e.createElement(&quot;div&quot;));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,&quot;X&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&amp;&amp;a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,&quot;body&quot;)||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&amp;&amp;this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&amp;&amp;this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),&quot;before&quot;,this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),&quot;after&quot;,this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&amp;&amp;c.nodeType===1&amp;&amp;(p.cleanData(c.getElementsByTagName(&quot;*&quot;)),p.cleanData([c])),c.parentNode&amp;&amp;c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&amp;&amp;p.cleanData(a.getElementsByTagName(&quot;*&quot;));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,&quot;&quot;):b;if(typeof a==&quot;string&quot;&amp;&amp;!bs.test(a)&amp;&amp;(p.support.htmlSerialize||!bu.test(a))&amp;&amp;(p.support.leadingWhitespace||!bn.test(a))&amp;&amp;!bz[(bp.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=a.replace(bo,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;d&lt;e;d++)c=this[d]||{},c.nodeType===1&amp;&amp;(p.cleanData(c.getElementsByTagName(&quot;*&quot;)),c.innerHTML=a);c=0}catch(f){}}c&amp;&amp;this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),&quot;replaceWith&quot;,a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!=&quot;string&quot;&amp;&amp;(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&amp;&amp;l&gt;1&amp;&amp;typeof j==&quot;string&quot;&amp;&amp;bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&amp;&amp;(g=f);if(f){c=c&amp;&amp;p.nodeName(f,&quot;tr&quot;);for(h=e.cacheable||l-1;i&lt;l;i++)d.call(c&amp;&amp;p.nodeName(this[i],&quot;table&quot;)?bC(this[i],&quot;tbody&quot;):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&amp;&amp;p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:&quot;GET&quot;,dataType:&quot;script&quot;,async:!1,global:!1,&quot;throws&quot;:!0}):p.error(&quot;no ajax&quot;):p.globalEval((b.text||b.textContent||b.innerHTML||&quot;&quot;).replace(by,&quot;&quot;)),b.parentNode&amp;&amp;b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&amp;&amp;c[0]||c,c=c.ownerDocument||c,a.length===1&amp;&amp;typeof i==&quot;string&quot;&amp;&amp;i.length&lt;512&amp;&amp;c===e&amp;&amp;i.charAt(0)===&quot;&lt;&quot;&amp;&amp;!bt.test(i)&amp;&amp;(p.support.checkClone||!bw.test(i))&amp;&amp;(p.support.html5Clone||!bu.test(i))&amp;&amp;(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&amp;&amp;(p.fragments[i]=h&amp;&amp;f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&amp;&amp;this[0].parentNode;if((i==null||i&amp;&amp;i.nodeType===11&amp;&amp;i.childNodes.length===1)&amp;&amp;h===1)return g[b](this[0]),this;for(;e&lt;h;e++)d=(e&gt;0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test(&quot;&lt;&quot;+a.nodeName+&quot;&gt;&quot;)?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&amp;&amp;(a.nodeType===1||a.nodeType===11)&amp;&amp;!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&amp;&amp;bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&amp;&amp;bA,t=[];if(!b||typeof b.createDocumentFragment==&quot;undefined&quot;)b=e;for(f=0;(h=a[f])!=null;f++){typeof h==&quot;number&quot;&amp;&amp;(h+=&quot;&quot;);if(!h)continue;if(typeof h==&quot;string&quot;)if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement(&quot;div&quot;),s.appendChild(l),h=h.replace(bo,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;),i=(bp.exec(h)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i===&quot;table&quot;&amp;&amp;!m?l.firstChild&amp;&amp;l.firstChild.childNodes:j[1]===&quot;&lt;table&gt;&quot;&amp;&amp;!m?l.childNodes:[];for(g=n.length-1;g&gt;=0;--g)p.nodeName(n[g],&quot;tbody&quot;)&amp;&amp;!n[g].childNodes.length&amp;&amp;n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&amp;&amp;bn.test(h)&amp;&amp;l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&amp;&amp;(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,&quot;input&quot;)?bG(h):typeof h.getElementsByTagName!=&quot;undefined&quot;&amp;&amp;p.grep(h.getElementsByTagName(&quot;input&quot;),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,&quot;script&quot;)||!q(h))c.appendChild(h),typeof h.getElementsByTagName!=&quot;undefined&quot;&amp;&amp;(r=p.grep(p.merge([],h.getElementsByTagName(&quot;script&quot;)),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&amp;&amp;i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&amp;&amp;(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf(&quot;compatible&quot;)&lt;0&amp;&amp;/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||&quot;&quot;,version:b[2]||&quot;0&quot;}},a=p.uaMatch(g.userAgent),b={},a.browser&amp;&amp;(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&amp;&amp;(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&amp;&amp;d instanceof p&amp;&amp;!(d instanceof a)&amp;&amp;(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp(&quot;^(&quot;+q+&quot;)(.*)$&quot;,&quot;i&quot;),bQ=new RegExp(&quot;^(&quot;+q+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),bR=new RegExp(&quot;^([-+])=(&quot;+q+&quot;)&quot;,&quot;i&quot;),bS={},bT={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},bU={letterSpacing:0,fontWeight:400},bV=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],bW=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length&gt;1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a==&quot;boolean&quot;;return p.isFunction(a)&amp;&amp;p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,&quot;opacity&quot;);return c===&quot;&quot;?&quot;1&quot;:c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:p.support.cssFloat?&quot;cssFloat&quot;:&quot;styleFloat&quot;},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&amp;&amp;&quot;get&quot;in h&amp;&amp;(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g===&quot;string&quot;&amp;&amp;(f=bR.exec(d))&amp;&amp;(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g=&quot;number&quot;);if(d==null||g===&quot;number&quot;&amp;&amp;isNaN(d))return;g===&quot;number&quot;&amp;&amp;!p.cssNumber[i]&amp;&amp;(d+=&quot;px&quot;);if(!h||!(&quot;set&quot;in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&amp;&amp;&quot;get&quot;in h&amp;&amp;(f=h.get(a,!0,e)),f===b&amp;&amp;(f=bH(a,c)),f===&quot;normal&quot;&amp;&amp;c in bU&amp;&amp;(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&amp;&amp;(d=h[c],d===&quot;&quot;&amp;&amp;!p.contains(b.ownerDocument,b)&amp;&amp;(d=p.style(b,c)),bQ.test(d)&amp;&amp;bO.test(c)&amp;&amp;(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&amp;&amp;(bH=function(a,b){var c,d,e=a.currentStyle&amp;&amp;a.currentStyle[b],f=a.style;return e==null&amp;&amp;f&amp;&amp;f[b]&amp;&amp;(e=f[b]),bQ.test(e)&amp;&amp;!bM.test(b)&amp;&amp;(c=f.left,d=a.runtimeStyle&amp;&amp;a.runtimeStyle.left,d&amp;&amp;(a.runtimeStyle.left=a.currentStyle.left),f.left=b===&quot;fontSize&quot;?&quot;1em&quot;:e,e=f.pixelLeft+&quot;px&quot;,f.left=c,d&amp;&amp;(a.runtimeStyle.left=d)),e===&quot;&quot;?&quot;auto&quot;:e}),p.each([&quot;height&quot;,&quot;width&quot;],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&amp;&amp;bN.test(bH(a,&quot;display&quot;))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&amp;&amp;p.css(a,&quot;boxSizing&quot;)===&quot;border-box&quot;):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&amp;&amp;a.currentStyle?a.currentStyle.filter:a.style.filter)||&quot;&quot;)?.01*parseFloat(RegExp.$1)+&quot;&quot;:b?&quot;1&quot;:&quot;&quot;},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?&quot;alpha(opacity=&quot;+b*100+&quot;)&quot;:&quot;&quot;,f=d&amp;&amp;d.filter||c.filter||&quot;&quot;;c.zoom=1;if(b&gt;=1&amp;&amp;p.trim(f.replace(bK,&quot;&quot;))===&quot;&quot;&amp;&amp;c.removeAttribute){c.removeAttribute(&quot;filter&quot;);if(d&amp;&amp;!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+&quot; &quot;+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:&quot;inline-block&quot;},function(){if(b)return bH(a,&quot;marginRight&quot;)})}}),!p.support.pixelPosition&amp;&amp;p.fn.position&amp;&amp;p.each([&quot;top&quot;,&quot;left&quot;],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+&quot;px&quot;:d}}}})}),p.expr&amp;&amp;p.expr.filters&amp;&amp;(p.expr.filters.hidden=function(a){return a.offsetWidth===0&amp;&amp;a.offsetHeight===0||!p.support.reliableHiddenOffsets&amp;&amp;(a.style&amp;&amp;a.style.display||bH(a,&quot;display&quot;))===&quot;none&quot;},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c==&quot;string&quot;?c.split(&quot; &quot;):[c],f={};for(d=0;d&lt;4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(cf,&quot;\r\n&quot;)}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?&quot;&quot;:b,e[e.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(b)};c===b&amp;&amp;(c=p.ajaxSettings&amp;&amp;p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&amp;&amp;!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join(&quot;&amp;&quot;).replace(cd,&quot;+&quot;)};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,cs=/([?&amp;])_=[^&amp;]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=[&quot;*/&quot;]+[&quot;*&quot;];try{cj=f.href}catch(cy){cj=e.createElement(&quot;a&quot;),cj.href=&quot;&quot;,cj=cj.href}ck=ct.exec(cj.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!=&quot;string&quot;&amp;&amp;cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(&quot; &quot;);return i&gt;=0&amp;&amp;(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&amp;&amp;typeof c==&quot;object&quot;&amp;&amp;(f=&quot;POST&quot;),p.ajax({url:a,type:f,dataType:&quot;html&quot;,data:c,complete:function(a,b){d&amp;&amp;h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p(&quot;&lt;div&gt;&quot;).append(a.replace(cr,&quot;&quot;)).find(e):a)}),this},p.each(&quot;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&quot;.split(&quot; &quot;),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each([&quot;get&quot;,&quot;post&quot;],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&amp;&amp;(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,&quot;script&quot;)},getJSON:function(a,b,c){return p.get(a,b,c,&quot;json&quot;)},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:cj,isLocal:cn.test(ck[1]),global:!0,type:&quot;GET&quot;,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,processData:!0,async:!0,accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,text:&quot;text/plain&quot;,json:&quot;application/json, text/javascript&quot;,&quot;*&quot;:cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;},converters:{&quot;* text&quot;:a.String,&quot;text html&quot;:!0,&quot;text json&quot;:p.parseJSON,&quot;text xml&quot;:p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&amp;&amp;clearTimeout(h),g=b,e=i||&quot;&quot;,x.readyState=a&gt;0?4:0,f&amp;&amp;(u=cC(l,x,f));if(a&gt;=200&amp;&amp;a&lt;300||a===304)l.ifModified&amp;&amp;(w=x.getResponseHeader(&quot;Last-Modified&quot;),w&amp;&amp;(p.lastModified[d]=w),w=x.getResponseHeader(&quot;Etag&quot;),w&amp;&amp;(p.etag[d]=w)),a===304?(y=&quot;notmodified&quot;,k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y=&quot;error&quot;,a&lt;0&amp;&amp;(a=0)}x.status=a,x.statusText=&quot;&quot;+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&amp;&amp;n.trigger(&quot;ajax&quot;+(k?&quot;Success&quot;:&quot;Error&quot;),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&amp;&amp;(n.trigger(&quot;ajaxComplete&quot;,[x,l]),--p.active||p.event.trigger(&quot;ajaxStop&quot;))}typeof a==&quot;object&quot;&amp;&amp;(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&amp;&amp;(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks(&quot;once memory&quot;),r=l.statusCode||{},t={},u={},v=0,w=&quot;canceled&quot;,x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&amp;&amp;g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v&lt;2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+&quot;&quot;).replace(cl,&quot;&quot;).replace(cp,ck[1]+&quot;//&quot;),l.dataTypes=p.trim(l.dataType||&quot;*&quot;).toLowerCase().split(s),l.crossDomain==null&amp;&amp;(i=ct.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==ck[1]&amp;&amp;i[2]==ck[2]&amp;&amp;(i[3]||(i[1]===&quot;http:&quot;?80:443))==(ck[3]||(ck[1]===&quot;http:&quot;?80:443)))),l.data&amp;&amp;l.processData&amp;&amp;typeof l.data!=&quot;string&quot;&amp;&amp;(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&amp;&amp;p.active++===0&amp;&amp;p.event.trigger(&quot;ajaxStart&quot;);if(!l.hasContent){l.data&amp;&amp;(l.url+=(cq.test(l.url)?&quot;&amp;&quot;:&quot;?&quot;)+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,&quot;$1_=&quot;+z);l.url=A+(A===l.url?(cq.test(l.url)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+z:&quot;&quot;)}}(l.data&amp;&amp;l.hasContent&amp;&amp;l.contentType!==!1||c.contentType)&amp;&amp;x.setRequestHeader(&quot;Content-Type&quot;,l.contentType),l.ifModified&amp;&amp;(d=d||l.url,p.lastModified[d]&amp;&amp;x.setRequestHeader(&quot;If-Modified-Since&quot;,p.lastModified[d]),p.etag[d]&amp;&amp;x.setRequestHeader(&quot;If-None-Match&quot;,p.etag[d])),x.setRequestHeader(&quot;Accept&quot;,l.dataTypes[0]&amp;&amp;l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!==&quot;*&quot;?&quot;, &quot;+cx+&quot;; q=0.01&quot;:&quot;&quot;):l.accepts[&quot;*&quot;]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&amp;&amp;v!==2){w=&quot;abort&quot;;for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,&quot;No Transport&quot;);else{x.readyState=1,j&amp;&amp;n.trigger(&quot;ajaxSend&quot;,[x,l]),l.async&amp;&amp;l.timeout&gt;0&amp;&amp;(h=setTimeout(function(){x.abort(&quot;timeout&quot;)},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v&lt;2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&amp;|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var a=cE.pop()||p.expando+&quot;_&quot;+cH++;return this[a]=!0,a}}),p.ajaxPrefilter(&quot;json jsonp&quot;,function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&amp;&amp;cG.test(j),m=k&amp;&amp;!l&amp;&amp;typeof i==&quot;string&quot;&amp;&amp;!(c.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;cG.test(i);if(c.dataTypes[0]===&quot;jsonp&quot;||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,&quot;$1&quot;+f):m?c.data=i.replace(cG,&quot;$1&quot;+f):k&amp;&amp;(c.url+=(cF.test(j)?&quot;&amp;&quot;:&quot;?&quot;)+c.jsonp+&quot;=&quot;+f),c.converters[&quot;script json&quot;]=function(){return h||p.error(f+&quot; was not called&quot;),h[0]},c.dataTypes[0]=&quot;json&quot;,a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&amp;&amp;(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&amp;&amp;p.isFunction(g)&amp;&amp;g(h[0]),h=g=b}),&quot;script&quot;}),p.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/javascript|ecmascript/},converters:{&quot;text script&quot;:function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter(&quot;script&quot;,function(a){a.cache===b&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;,a.global=!1)}),p.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName(&quot;head&quot;)[0]||e.documentElement;return{send:function(f,g){c=e.createElement(&quot;script&quot;),c.async=&quot;async&quot;,a.scriptCharset&amp;&amp;(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&amp;&amp;c.parentNode&amp;&amp;d.removeChild(c),c=b,e||g(200,&quot;success&quot;)},d.insertBefore(c,d.firstChild)},abort:function(){c&amp;&amp;c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&amp;&amp;cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&amp;&amp;&quot;withCredentials&quot;in a})}(p.ajaxSettings.xhr()),p.support.ajax&amp;&amp;p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&amp;&amp;i.overrideMimeType&amp;&amp;i.overrideMimeType(c.mimeType),!c.crossDomain&amp;&amp;!e[&quot;X-Requested-With&quot;]&amp;&amp;(e[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&amp;&amp;c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&amp;&amp;(e||i.readyState===4)){d=b,g&amp;&amp;(i.onreadystatechange=p.noop,cJ&amp;&amp;delete cI[g]);if(e)i.readyState!==4&amp;&amp;i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&amp;&amp;m.documentElement&amp;&amp;(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=&quot;&quot;}!h&amp;&amp;c.isLocal&amp;&amp;!c.crossDomain?h=l.text?200:404:h===1223&amp;&amp;(h=204)}}}catch(o){e||f(-1,o)}l&amp;&amp;f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&amp;&amp;(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&amp;&amp;d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp(&quot;^(?:([-+])=|)(&quot;+q+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),cR=/queueHooks$/,cS=[cY],cT={&quot;*&quot;:[function(a,b){var c,d,e,f=this.createTween(a,b),g=cQ.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?&quot;&quot;:&quot;px&quot;);if(d!==&quot;px&quot;&amp;&amp;i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||&quot;.5&quot;,i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&amp;&amp;j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=[&quot;*&quot;]):a=a.split(&quot; &quot;);var c,d=0,e=a.length;for(;d&lt;e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||&quot;swing&quot;,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?&quot;&quot;:&quot;px&quot;)},cur:function(){var a=cZ.propHooks[this.prop];return a&amp;&amp;a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),c&amp;&amp;c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&amp;&amp;a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,&quot;&quot;),!b||b===&quot;auto&quot;?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&amp;&amp;(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&amp;&amp;a.elem.parentNode&amp;&amp;(a.elem[a.prop]=a.now)}},p.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d==&quot;boolean&quot;||!a&amp;&amp;p.isFunction(d)&amp;&amp;p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&amp;&amp;b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!=&quot;string&quot;&amp;&amp;(d=c,c=a,a=b),c&amp;&amp;a!==!1&amp;&amp;this.queue(a||&quot;fx&quot;,[]),this.each(function(){var b=!0,c=a!=null&amp;&amp;a+&quot;queueHooks&quot;,f=p.timers,g=p._data(this);if(c)g[c]&amp;&amp;g[c].stop&amp;&amp;e(g[c]);else for(c in g)g[c]&amp;&amp;g[c].stop&amp;&amp;cR.test(c)&amp;&amp;e(g[c]);for(c=f.length;c--;)f[c].elem===this&amp;&amp;(a==null||f[c].queue===a)&amp;&amp;(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&amp;&amp;p.dequeue(this,a)})}}),p.each({slideDown:c$(&quot;show&quot;),slideUp:c$(&quot;hide&quot;),slideToggle:c$(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&amp;&amp;typeof a==&quot;object&quot;?p.extend({},a):{complete:c||!c&amp;&amp;b||p.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!p.isFunction(b)&amp;&amp;b};d.duration=p.fx.off?0:typeof d.duration==&quot;number&quot;?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue=&quot;fx&quot;;return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&amp;&amp;d.old.call(this),d.queue&amp;&amp;p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c&lt;b.length;c++)a=b[c],!a()&amp;&amp;b[c]===a&amp;&amp;b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&amp;&amp;p.timers.push(a)&amp;&amp;!cO&amp;&amp;(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&amp;&amp;p.expr.filters&amp;&amp;(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&amp;&amp;m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=da(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&amp;&amp;(b+=parseFloat(p.css(a,&quot;marginTop&quot;))||0,c+=parseFloat(p.css(a,&quot;marginLeft&quot;))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,&quot;position&quot;);d===&quot;static&quot;&amp;&amp;(a.style.position=&quot;relative&quot;);var e=p(a),f=e.offset(),g=p.css(a,&quot;top&quot;),h=p.css(a,&quot;left&quot;),i=(d===&quot;absolute&quot;||d===&quot;fixed&quot;)&amp;&amp;p.inArray(&quot;auto&quot;,[g,h])&gt;-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&amp;&amp;(b=b.call(a,c,f)),b.top!=null&amp;&amp;(j.top=b.top-f.top+l),b.left!=null&amp;&amp;(j.left=b.left-f.left+m),&quot;using&quot;in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,&quot;marginTop&quot;))||0,c.left-=parseFloat(p.css(a,&quot;marginLeft&quot;))||0,d.top+=parseFloat(p.css(b[0],&quot;borderTopWidth&quot;))||0,d.left+=parseFloat(p.css(b[0],&quot;borderLeftWidth&quot;))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&amp;&amp;!c_.test(a.nodeName)&amp;&amp;p.css(a,&quot;position&quot;)===&quot;static&quot;)a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(a,c){p.each({padding:&quot;inner&quot;+a,content:c,&quot;&quot;:&quot;outer&quot;+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&amp;&amp;(d||typeof e!=&quot;boolean&quot;),h=d||(e===!0||f===!0?&quot;margin&quot;:&quot;border&quot;);return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement[&quot;client&quot;+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body[&quot;scroll&quot;+a],f[&quot;scroll&quot;+a],c.body[&quot;offset&quot;+a],f[&quot;offset&quot;+a],f[&quot;client&quot;+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define==&quot;function&quot;&amp;&amp;define.amd&amp;&amp;define.amd.jQuery&amp;&amp;define(&quot;jquery&quot;,[],function(){return p})})(window);</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>

      <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
      <div id="jump-to-line" style="display:none">
        <h2>Jump to Line</h2>
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
          <input class="textfield js-jump-to-line-field" type="text">
          <div class="full-button">
            <button type="submit" class="classy">
              Go
            </button>
          </div>
        </form>
      </div>

    </div>
</div>

<div class="frame frame-loading large-loading-area" style="display:none;">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2012 <span title="0.08701s from fe13.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08816' data-host='fe13'></span>
    
  </body>
</html>

