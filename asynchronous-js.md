


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    <meta content="origin-when-crossorigin" name="referrer" />
    
    <title>js-curriculum/asynchronous-js.md at master · appacademy/js-curriculum</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="appacademy/js-curriculum" name="twitter:title" /><meta content="js-curriculum - Beware of Jawas!" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/2138704?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/2138704?v=3&amp;s=400" property="og:image" /><meta content="appacademy/js-curriculum" property="og:title" /><meta content="https://github.com/appacademy/js-curriculum" property="og:url" /><meta content="js-curriculum - Beware of Jawas!" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTEyOTUyNzo5YzAyYjBiMmM0NTA0Mzg0MDI2MmIyOGM2YWFiYmU5ZjpiYTU5MTdlYjk2MmI2YzY1NmJjMGY4NjRkYjJjYzYzNTM5M2M5YTU4YmE0MzZiOTNkY2E2ZmE5Y2RhYTU4Yjgz--948cd7c90829abfe54d5f5d3fb957eb595d785c7">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C7F1C8F8:0F6A:30FA43E:560717F7" name="octolytics-dimension-request_id" /><meta content="1129527" name="octolytics-actor-id" /><meta content="mihirjham" name="octolytics-actor-login" /><meta content="a86cb19a99625d16616a96bdd8cf107840393dbe5c2efff30f0eaa8d7a230ce6" name="octolytics-actor-hash" />
    <meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="mihirjham">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="AxVUhX0rjyVo0P0snmsLOx/zCBojI84rfICpU5BS1KjyOwIcco62d2nd8JQ1OfH0trNd6oh/qiZUpxsm6zRRHg==" name="csrf-token" />
    <meta content="198a9fc61b47d29312f6c821727d5d940b32f9fe" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d3b5b3df2f65fc68f5e345a65ac963467f6c81cf28ea86808ec363627c646deb.css" integrity="sha256-07Wz3y9l/Gj140WmWsljRn9sgc8o6oaAjsNjYnxkbes=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-5c5f822f8fcc71f3c7ef329235cc20ddb312d1e4a952030b5cbcce6bc6938888.css" integrity="sha256-XF+CL4/McfPH7zKSNcwg3bMS0eSpUgMLXLzOa8aTiIg=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="66f455c6719e9be482f1485001a46a01">

      
  <meta name="description" content="js-curriculum - Beware of Jawas!">
  <meta name="go-import" content="github.com/appacademy/js-curriculum git https://github.com/appacademy/js-curriculum.git">

  <meta content="2138704" name="octolytics-dimension-user_id" /><meta content="appacademy" name="octolytics-dimension-user_login" /><meta content="8786702" name="octolytics-dimension-repository_id" /><meta content="appacademy/js-curriculum" name="octolytics-dimension-repository_nwo" /><meta content="false" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8786702" name="octolytics-dimension-repository_network_root_id" /><meta content="appacademy/js-curriculum" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/appacademy/js-curriculum/commits/master.atom?token=ABE8NzZM6VZifj7th0Xad_otiLYSzLe6ks60FFiQwA%3D%3D" rel="alternate" title="Recent Commits to js-curriculum:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production macintosh vis-private page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/appacademy/js-curriculum/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/appacademy/js-curriculum/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:mihirjham"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="appacademy/js-curriculum">This repository</span>
  </div>
    <a class="dropdown-item" href="/appacademy/js-curriculum/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/mihirjham"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@mihirjham" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1129527?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">mihirjham</strong>

        </div>



        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/mihirjham" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5dIHkxCeOwpcHrOMiLIZgrJj0sc5kMoFrJTlD4cpM4qoCrB3cY2E6ZclMK3oN1HFIetbyq8DR4ic17ke2F3+JA==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Mn1UdPxYomSE9cDmq973VAGQtF6prOxqlpmGoGFzOyuCkXTSNz2SwRTNk3PhjHNl7bPp1c1ZwpqhHO6IXPSESg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="8786702" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/appacademy/js-curriculum/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/appacademy/js-curriculum/watchers">
          155
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/appacademy/js-curriculum/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nU1jTMTyVsz6zQ8p5ZO/J7GxR5ttMUHvxDCbOR3onwU664vGFMjGVd783u6H0/XoRVLH1Ut1CdQT3GWHWojRIg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar appacademy/js-curriculum"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/appacademy/js-curriculum/stargazers">
          23
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/appacademy/js-curriculum/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2WXFki6wd2Muqxf6CJmb878AgXx3vxsFQ+17+pBqHEMxuqyhu3IOUshZ4RbQspMIrEi9HSKM9jecWxWrL2a0Lw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star appacademy/js-curriculum"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/appacademy/js-curriculum/stargazers">
          23
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of appacademy/js-curriculum to your account"
              aria-label="Fork your own copy of appacademy/js-curriculum to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/appacademy/js-curriculum/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/appacademy/js-curriculum/network" class="social-count">
      67
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title private ">
  <span class="mega-octicon octicon-lock"></span>
  <span class="author"><a href="/appacademy" class="url fn" itemprop="url" rel="author"><span itemprop="title">appacademy</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/appacademy/js-curriculum" data-pjax="#js-repo-pjax-container">js-curriculum</a></strong>
    <span class="repo-private-label">private</span>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/appacademy/js-curriculum/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/appacademy/js-curriculum" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /appacademy/js-curriculum">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/appacademy/js-curriculum/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /appacademy/js-curriculum/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/appacademy/js-curriculum/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /appacademy/js-curriculum/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/appacademy/js-curriculum/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /appacademy/js-curriculum/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/appacademy/js-curriculum/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /appacademy/js-curriculum/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/appacademy/js-curriculum/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /appacademy/js-curriculum/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/appacademy/js-curriculum.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:appacademy/js-curriculum.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/appacademy/js-curriculum" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uVTTO8k+IDlazWcqK+ydckfnA4yOQlh4R93dMX948Rynsh0pdMbzAtAzUtPP4fFGvRD0dcR3P1ElUs6He4cW6Q==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NOR58u7UxPhHBfdbCMdVJ6+i0w4AdtlCgxJX0FuycVaO9wHjKFE3d2WHAx46KMA/CuEICn29LtJjuxHR7iYEqQ==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aN8z4UXUsPjAu7wK1xzyfMwpDkL3BFI4y5PO3qfKvIb/JtZD1QDc3/0zUcbK7U9Mi6/CRbvztahwqrg5ci4AFA==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="github-mac://openRepo/https://github.com/appacademy/js-curriculum" class="btn btn-sm sidebar-button" title="Save appacademy/js-curriculum to your computer and use it in GitHub Desktop." aria-label="Save appacademy/js-curriculum to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/appacademy/js-curriculum/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of appacademy/js-curriculum as a zip file"
                 title="Download the contents of appacademy/js-curriculum as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/appacademy/js-curriculum/blob/302030db0c94786572cd94c457cd89941de32e13/w6d1/asynchronous-js.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a4a28b6917fa26f89d0988a44f51b66d -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/absurdBubbleSort/w6d1/asynchronous-js.md"
               data-name="absurdBubbleSort"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="absurdBubbleSort">
                absurdBubbleSort
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/appacademy/js-curriculum/blob/master/w6d1/asynchronous-js.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/n/w6d1/asynchronous-js.md"
               data-name="n"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="n">
                n
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/node_global_for_module_pattern/w6d1/asynchronous-js.md"
               data-name="node_global_for_module_pattern"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="node_global_for_module_pattern">
                node_global_for_module_pattern
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/temp/w6d1/asynchronous-js.md"
               data-name="temp"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="temp">
                temp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/ttt-instructions/w6d1/asynchronous-js.md"
               data-name="ttt-instructions"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ttt-instructions">
                ttt-instructions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/typo-fix/w6d1/asynchronous-js.md"
               data-name="typo-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="typo-fix">
                typo-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/appacademy/js-curriculum/blob/vveleva-update-mybind-example/w6d1/asynchronous-js.md"
               data-name="vveleva-update-mybind-example"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="vveleva-update-mybind-example">
                vveleva-update-mybind-example
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/appacademy/js-curriculum/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/appacademy/js-curriculum" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js-curriculum</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/appacademy/js-curriculum/tree/master/w6d1" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">w6d1</span></a></span><span class="separator">/</span><strong class="final-path">asynchronous-js.md</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@itsjimmyh" class="avatar" height="24" src="https://avatars3.githubusercontent.com/u/7053421?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/itsjimmyh" rel="contributor">itsjimmyh</a></span>
        <time datetime="2014-09-17T03:52:46Z" is="relative-time">Sep 16, 2014</time>
        <div class="commit-title">
            <a href="/appacademy/js-curriculum/commit/3309e1d07709e671309fb77779e20aafb962a1c5" class="message" data-pjax="true" title="Update asynchronous-js.md">Update asynchronous-js.md</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="ruggeri" href="/appacademy/js-curriculum/commits/master/w6d1/asynchronous-js.md?author=ruggeri"><img alt="@ruggeri" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/627382?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="itsjimmyh" href="/appacademy/js-curriculum/commits/master/w6d1/asynchronous-js.md?author=itsjimmyh"><img alt="@itsjimmyh" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7053421?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@ruggeri" height="24" src="https://avatars1.githubusercontent.com/u/627382?v=3&amp;s=48" width="24" />
            <a href="/ruggeri">ruggeri</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@itsjimmyh" height="24" src="https://avatars3.githubusercontent.com/u/7053421?v=3&amp;s=48" width="24" />
            <a href="/itsjimmyh">itsjimmyh</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/appacademy/js-curriculum/raw/master/w6d1/asynchronous-js.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/appacademy/js-curriculum/blame/master/w6d1/asynchronous-js.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/appacademy/js-curriculum/commits/master/w6d1/asynchronous-js.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>

      <a class="octicon-btn tooltipped tooltipped-nw"
         href="github-mac://openRepo/https://github.com/appacademy/js-curriculum?branch=master&amp;filepath=w6d1%2Fasynchronous-js.md"
         aria-label="Open this file in GitHub Desktop"
         data-ga-click="Repository, open with desktop, type:mac">
          <span class="octicon octicon-device-desktop"></span>
      </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/appacademy/js-curriculum/edit/master/w6d1/asynchronous-js.md" class="inline-form js-update-url-with-hash" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nJG9kXq9SAby5bSoK84RTivLhLh7nAyPJRwseFXiRxBsQ9DfOLDS/8AJDYlJ1dK3RiqYlYSfdrAyq887MU5Ewg==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/appacademy/js-curriculum/delete/master/w6d1/asynchronous-js.md" class="inline-form" data-form-nonce="198a9fc61b47d29312f6c821727d5d940b32f9fe" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o+m5Qk60piTUv12njZJCSMjHOqdKm6STe3GGCBIsZpoK8l/WLYYqsXYBO/Km7eYuzA3C/Z5tlQHpFcajAM7viw==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      153 lines (121 sloc)
      <span class="file-info-divider"></span>
    4.88 KB
  </div>
</div>

  
  <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-asynchronous-client-side-code" class="anchor" href="#asynchronous-client-side-code" aria-hidden="true"><span class="octicon octicon-link"></span></a>Asynchronous Client-side Code</h1>

<p>When your JavaScript code is being run in the browser, it blocks the
browser from doing other things. This includes running other JS code,
but also making new browser requests, rendering HTML, or even
scrolling. For instance, try this:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;
<span class="pl-s1">    &lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1">      <span class="pl-k">while</span> (<span class="pl-c1">true</span>) {</span>
<span class="pl-s1">        <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>Help! I'm stuck in a loop!<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">      }</span>
<span class="pl-s1">    &lt;/<span class="pl-ent">script</span>&gt;</span>

    &lt;<span class="pl-ent">h1</span>&gt;This heading never appears!&lt;/<span class="pl-ent">h1</span>&gt;
  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>

<p>Your tab should be entirely locked up; you'll have to close it. Notice
the <code>h1</code> tag is never rendered, because the browser stopped rendering
the HTML to run the script, but the script never finished!</p>

<p>There is one thing that you won't be able to do: execute a traditional
game loop:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">while</span> (<span class="pl-c1">true</span>) {
  <span class="pl-c">// in many other languages (including Ruby), we can `sleep` to pause</span>
  <span class="pl-c">// the game for a second and then resume. In JS there is no `sleep`.</span>
  sleep(<span class="pl-c1">1</span>); <span class="pl-c">// wrong</span>

  <span class="pl-c">// take a game step once per sec</span>
  game.advanceState();
}</pre></div>

<p>There is no sleep method in JS; it wouldn't make sense anyway, because
you mustn't write code that won't return promptly. However, JS and the
browser give you a way around this:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c1">window</span>.<span class="pl-c1">setInterval</span>(<span class="pl-k">function</span> () {
  <span class="pl-c">// call this once per second</span>
  game.advanceState();
}, <span class="pl-c1">1000</span>);

<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>Timer set!<span class="pl-pds">"</span></span>);</pre></div>

<p>The <code>window.setInterval</code> method schedules a timer that fires once
every 1000 milliseconds. When the timer fires, our function is
called. This approximates a loop, but it is
non-blocking. <code>setInterval</code> runs in the blink of an eye; it merely
schedules a timer, to be fired by the browser later. So
<code>console.log("Timer set!")</code> is called instantly.</p>

<p>If you wonder how you could possibly write <code>window.setInterval</code> in
pure JS, the answer is that you can't. The browser needs to provide
that functionality. This is an example of a browser API that allows us
to do things that pure JavaScript can't express. We can <strong>ask</strong> the
browser to set a timer through the JavaScript API, but we couldn't
write it ourself in JavaScript.</p>

<h2><a id="user-content-callbacks-and-event-handlers" class="anchor" href="#callbacks-and-event-handlers" aria-hidden="true"><span class="octicon octicon-link"></span></a>Callbacks and event handlers</h2>

<p>An idiom from our Ruby game code is to enter a loop, request user
input, and then pass the input to the game. In JS, we can do this with
the synchronous <code>prompt</code> command:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// wait for input</span>
<span class="pl-k">var</span> userInput <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">prompt</span>();

game.makeMove(userInput);</pre></div>

<p><strong>Don't use prompt</strong>. This pops up an input box for the user to type
in text. But because the <code>prompt</code> waits for user input, it blocks the
<strong>entire</strong> page. Nothing at all can happen (they can't even
scroll). This is bad.</p>

<p>Let's consider a better alternative. What if we want to enter text
into a normal text input field and press a button to submit it? Code
should run after the button is clicked.</p>

<p>Input in JavaScript is typically handled <strong>asynchronously</strong>: we will
register (or <strong>bind</strong>) a function (called a <strong>handler</strong>) to be called
by the browser when an <strong>event</strong> occurs. Here's an example:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">head</span>&gt;
    &lt;<span class="pl-ent">title</span>&gt;A page for you!&lt;/<span class="pl-ent">title</span>&gt;

<span class="pl-s1">    &lt;<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>application/javascript<span class="pl-pds">"</span></span></span>
<span class="pl-s1">             <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js<span class="pl-pds">"</span></span>&gt;</span>
<span class="pl-s1">    &lt;/<span class="pl-ent">script</span>&gt;</span>
  &lt;/<span class="pl-ent">head</span>&gt;

  &lt;<span class="pl-ent">body</span>&gt;
    &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>text-field<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">button</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>submit-button<span class="pl-pds">"</span></span>&gt;Submit me!&lt;/<span class="pl-ent">button</span>&gt;

<span class="pl-s1">    &lt;<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>application/javascript<span class="pl-pds">"</span></span>&gt;</span>
<span class="pl-s1">      <span class="pl-c">// uses jQuery to find HTML elements by id.</span></span>
<span class="pl-s1">      <span class="pl-k">var</span> $submitButtonEl <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">'</span>#submit-button<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">      <span class="pl-k">var</span> $textFieldEl <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">'</span>#text-field<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c">// installs a "click handler" on the submit button; the callback</span></span>
<span class="pl-s1">      <span class="pl-c">// gets run when the button is clicked.</span></span>
<span class="pl-s1">      $submitButtonEl.on(<span class="pl-s"><span class="pl-pds">'</span>click<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> () {</span>
<span class="pl-s1">        <span class="pl-c">// grab input text from the text field.</span></span>
<span class="pl-s1">        <span class="pl-k">var</span> input <span class="pl-k">=</span> $textFieldEl.val();</span>
<span class="pl-s1">        <span class="pl-c">// reset text field to blank</span></span>
<span class="pl-s1">        $textFieldEl.val(<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>)</span>
<span class="pl-s1"></span>
<span class="pl-s1">        <span class="pl-c">// Build a new `p` tag with the input content and append it to</span></span>
<span class="pl-s1">        <span class="pl-c">// the body.</span></span>
<span class="pl-s1">        <span class="pl-k">var</span> $parEl <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">"</span>&lt;p&gt;&lt;/p&gt;<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">        $parEl.<span class="pl-c1">text</span>(input);</span>
<span class="pl-s1">        $(<span class="pl-s"><span class="pl-pds">"</span>body<span class="pl-pds">"</span></span>).append($parEl);</span>
<span class="pl-s1">      });</span>
<span class="pl-s1">    &lt;/<span class="pl-ent">script</span>&gt;</span>
  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>

<p>JavaScript lets us ask the browser to notify us of <strong>events</strong>. Here,
we're asking the browser to listen for a <code>click</code> event on the
<code>$submitButtonEl</code>. When a user presses the mouse while it is hovered
over the <code>$submitButtonEl</code>, the browser interprets this as a "click"
occurring on the button. The browser then calls any JavaScript code
that has been <strong>registered</strong> as a <strong>handler</strong> for the event.</p>

<p>Our handler extracts the value of the <code>$textFieldEl</code>, resetting it. We
then build and append a <code>p</code> tag with the input contents.</p>

<p>This is all accomplished through jQuery's <code>on</code> method, which asks the
browser to <strong>register</strong> the <strong>handler</strong> to call later when the
<strong>event</strong> is <strong>triggered</strong>.</p>

<p>Paste this in the browser and try it out!</p>

<h2><a id="user-content-resources" class="anchor" href="#resources" aria-hidden="true"><span class="octicon octicon-link"></span></a>Resources</h2>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.setInterval">https://developer.mozilla.org/en-US/docs/DOM/window.setInterval</a></li>
<li><a href="http://recurial.com/programming/understanding-callback-functions-in-javascript">http://recurial.com/programming/understanding-callback-functions-in-javascript</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.prompt">https://developer.mozilla.org/en-US/docs/DOM/window.prompt</a></li>
<li><a href="http://api.jquery.com/on/">http://api.jquery.com/on/</a></li>
</ul>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08157s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-+Ec97OckLaaiDVIxNjSIGzl1xSzrqh5sOBV8DyYYVpE=" src="https://assets-cdn.github.com/assets/frameworks-f8473dece7242da6a20d52313634881b3975c52cebaa1e6c38157c0f26185691.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-7mQUuwycQ/5sSyawnsrzNebXbeAtkqFQrykqHSA0tyg=" src="https://assets-cdn.github.com/assets/github-ee6414bb0c9c43fe6c4b26b09ecaf335e6d76de02d92a150af292a1d2034b728.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

