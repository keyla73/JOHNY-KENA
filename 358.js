function removeHtmlTag(a,b){for(var c=a.split("<"),d=0;d<c.length;d++)c[d].indexOf(">")!=-1&&(c[d]=c[d].substring(c[d].indexOf(">")+1,c[d].length));return c=c.join(""),c=c.substring(0,b-1)}function showrecentposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var f=0;f<numposts;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=postdate.split("-")[2].substring(0,2),q=postdate.split("-")[1],r=postdate.split("-")[0],t=0;t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}var u=p+" "+q+" "+r;if(0==f){var v='<div class="boxcont"><div class="thumb"><a href="'+k+'"><img width="336" height="256" src="'+img[f]+'"/></a></div><h5>'+u+'</h5><h2><a href="'+k+'">'+h+"</a></h2><p>"+removeHtmlTag(m,summaryPost)+'... </p><div class="more"><div class="more">More news</div></div><ul>';document.write(v)}if(f>0&&f<numposts){var v='<li><a href="'+k+'">'+h+"</a></li>";document.write(v)}j++}document.write("</ul></div>")}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length;for(var f=0;f<maxpost;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["January","February","March","April","May","June","July","August","September","October","November","December"],p=postdate.split("-")[2].substring(0,2),q=postdate.split("-")[1],r=postdate.split("-")[0],t=0;t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}var u=p+" "+q+" "+r;if(i='<a href="'+k+'">'+i+" comments</a>",0==f){var v='<li class="first"><div class="entry-thumb"><a href="'+k+'"><img width="80" height="70" src="'+img[f]+'"/> </a></div><h2 class="entry-title"><a href="'+k+'">'+h+"</a></h2><h5>"+u+'</h5><div class="entry-excerpt">'+removeHtmlTag(m,summaryPost1)+"...  </div></li>";document.write(v)}if(f>0&&f<maxpost){var v='<li class="catlist"><a href="'+k+'">'+h+"</a></li>";document.write(v)}j++}}function showrecentposts2(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var f=0;f<numposts2;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],q=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),t=(postdate.split("-")[0],0);t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}var v='<div class="column"><a href="'+k+'"><img width="143" height="95" src="'+img[f]+'"/></a><h2><a href="'+k+'">'+h+"</a></h2><p>"+removeHtmlTag(m,summaryPost1)+"...</p></div>";document.write(v),j++}}function showrecentposts3(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var f=0;f<numposts3;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=postdate.split("-")[2].substring(0,2),q=postdate.split("-")[1],r=postdate.split("-")[0],t=0;t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}var u=p+" "+q+" "+r;if(0==f){var v='<div class="boxcontent1"><div class="thumb"><a href="'+k+'"><img width="300" height="210" src="'+img[f]+'"/></a></div><h5>'+u+'</h5><h2><a href="'+k+'">'+h+"</a></h2><p>"+removeHtmlTag(m,summaryPost)+'... </p><div class="more">More news</div><ul>';document.write(v)}if(f>0&&f<numposts3){var v='<li><a href="'+k+'">'+h+"</a></li>";document.write(v)}j++}document.write("</ul></div>")}function showrecentposts0(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,document.write("<ul>");for(var f=0;f<numposts0;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["January","February","March","April","May","June","July","August","September","October","November","December"],p=postdate.split("-")[2].substring(0,2),q=postdate.split("-")[1],r=postdate.split("-")[0],t=0;t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}var u=p+" "+q+" "+r,v='<li class="car"><div class="thumb"><a href="'+k+'"><img width="69" height="64" class="alignnone" src="'+img[f]+'"/></a></div><h5>'+u+'</h5><a class="slider_title" href="'+k+'">'+h+"</a></li>";document.write(v),j++}document.write("</ul>")}function related_results_labels_thumbs(e){for(var f=0;f<e.feed.entry.length;f++){var g=e.feed.entry[f];relatedTitles[relatedTitlesNum]=g.title.$t;try{thumburl[relatedTitlesNum]=g.gform_foot.url}catch(e){s=g.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),a!=-1&&b!=-1&&c!=-1&&""!=d?thumburl[relatedTitlesNum]=d:thumburl[relatedTitlesNum]="http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg"}relatedTitles[relatedTitlesNum].length>35&&(relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...");for(var h=0;h<g.link.length;h++)"alternate"==g.link[h].rel&&(relatedUrls[relatedTitlesNum]=g.link[h].href,relatedTitlesNum++)}}function removeRelatedDuplicates_thumbs(){for(var a=new Array(0),b=new Array(0),c=new Array(0),d=0;d<relatedUrls.length;d++)contains_thumbs(a,relatedUrls[d])||(a.length+=1,a[a.length-1]=relatedUrls[d],b.length+=1,c.length+=1,b[b.length-1]=relatedTitles[d],c[c.length-1]=thumburl[d]);relatedTitles=b,relatedUrls=a,thumburl=c}function contains_thumbs(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function printRelatedLabels_thumbs(){for(var a=0;a<relatedUrls.length;a++)relatedUrls[a]!=currentposturl&&relatedTitles[a]||(relatedUrls.splice(a,1),relatedTitles.splice(a,1),thumburl.splice(a,1),a--);var b=Math.floor((relatedTitles.length-1)*Math.random()),a=0;for(relatedTitles.length>0&&document.write("<h1>"+relatedpoststitle+"</h1>"),document.write('<div style="clear: both;"/>');a<relatedTitles.length&&a<20&&a<maxresults;)document.write('<a style="text-decoration:none;margin:0 10px 10px 0;float:left;border:solid 1px #ccc;'),0!=a?document.write('border:solid 1px #ccc;"'):document.write('"'),document.write(' href="'+relatedUrls[b]+'"><img class="maskolis_img" src="'+thumburl[b]+'"/><br/><div style="width:130px;padding:0 5px;color:#222;height:35px;text-align:center;margin:0px 0px; font:14px PT Sans Narrow; line-height:16px;">'+relatedTitles[b]+"</div></a>"),b<relatedTitles.length-1?b++:b=0,a++;document.write("</div>"),relatedUrls.splice(0,relatedUrls.length),thumburl.splice(0,thumburl.length),relatedTitles.splice(0,relatedTitles.length)}imgr=new Array,imgr[0]="http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg",showRandomImg=!0,aBold=!0,summaryPost=180,summaryPost1=80,summaryTitle=20,numposts=4,numposts1=5,numposts2=4,numposts3=4,numposts0=12,Title1="TIPS KOMPUTER",Title2="SEKILAS INFO",Title3="LINUXER",Title4="BROWSER",Title5="ANDROID";var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;
