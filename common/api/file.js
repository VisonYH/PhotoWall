var fs = require("fs");

//这个函数的callback中含有两个参数，一个是err
//另一个是存放所有文件夹名字的array。
module.exports.getAllAlbums = function(callback){
    console.log(__dirname);
    fs.readdir("C:\\Users\\Administrator\\Desktop\\open_question\\NewShow\\git项目\\vue-upload-photo-wall\\static\\images",function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
        }
        var allAlbums = [];
        
        (function iterator(i){
            if(i == files.length){
                //遍历结束  
                callback(null,allAlbums);
                return;
            }
            fs.stat("C:\\Users\\Administrator\\Desktop\\open_question\\NewShow\\git项目\\vue-upload-photo-wall\\static\\images\\" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}

//通过文件名，得到所有图片
module.exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir("C:\\Users\\Administrator\\Desktop\\open_question\\NewShow\\git项目\\vue-upload-photo-wall\\static\\images\\" + albumName,function(err,files){
        if(err){
            callback("没有找到images文件",null);
            return;
        }
        var allImages = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("C:\\Users\\Administrator\\Desktop\\open_question\\NewShow\\git项目\\vue-upload-photo-wall\\static\\images\\" + albumName + "\\" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}