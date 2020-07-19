var IdFinance='';
var SINoFinance='';
 var Financepostion='';
   var FinanceId='';
function initAttachmentFinance(obj) 
{
   IdFinance=obj.id;
 // SINo=Id.split('_')[1];
 SINoFinance=IdFinance.substring(IdFinance.lastIndexOf('_')+1);
    var Financecontrol = document.getElementById(IdFinance);
    Financecontrol.addEventListener("change", BindAttachmentforFinance, false);

 
}

 

var file;
var contents;
var fileID;
var files;

function BindAttachmentforFinance(event)
{
	ShowLoader();
		$("#BSIPLoader").show()
		var isvalidated=true;
	    var i = 0;
	    files = event.srcElement.files;
	    var len = files.length;
	    fileID=event.srcElement.id;
	    
	    if(len >0)
	    {
	
		    for (; i < len; i++)
		     {
				var FileSize = files[i].size / 1024 / 1024;
				if(!(FileSize <=11))
				{
					isvalidated=false;
		        	//$("#BCRFileattach").val(null);
		        	HideLoader();
		        	$("#BSIPLoader").hide()
		        	//alert('Please upload file upto 2 MB');
					isvalidated.msg='Please upload file upto 10 MB';
					//ShowErrorValidations(isvalidated.msg,'error','Validation Failed');
					ShowErrorValidations('Please upload file upto 10 MB','error','Validation Failed');

					fileID='';
					break;
				}
 
		       
		     }
        }
        if(isvalidated)
        {
                  BindFinanceAttachmentforView();
        }

}



function BindFinanceAttachmentforView()
{
//$('#FinanceattachedFiles').empty();
if (files.length > 0) 
	{
         file = files[0];
        fileName = file.name;
       // fileurl=file.url;
	$('#FinanceattachedFiles_'+SINoFinance).append('<div id="Financefilediv_'+SINoFinance+'">'+parseInt(0+1)+'. <span>'+fileName +'</span><a onclick="DeleteAttachmentforFinance(this)" data-Id="Financefilediv_'+SINoFinance+'" data-filename="'+fileName+'"><img border="0" alt="Delete Attachment" src="/sites/bscindia/ExitProcess/Style Library/ExitProcess/images/rubbish-bin-org.svg" width="20" height="20" style="margin-left: 10px;cursor: pointer;"></a></div>');
   // $('#FinanceattachedFiles'+SINo').append('+parseInt(1)+'. <a  style="text-decoration:underline;font-weight: bold;">'+fileName+'</a><a onclick="DeleteAttachment(this)" data-filename="'+fileName+'"><img border="0" alt="Delete Attachment" src="/sites/bscindia/ExitProcess/Style Library/ExitProcess/images/rubbish-bin-org.svg" width="20" height="20" style="margin-left: 10px;cursor: pointer;"></a>');

    $('#FinanceFile'+SINoFinance).val('');
    $('#FinanceFile_'+SINoFinance).hide();
    }  
	else 
	{
		
	//$('#FinanceattachedFiles').empty();
	}
	fileID='';
		HideLoader();
		$("#BSIPLoader").hide()
		
		
}

function DeleteAttachmentforFinance(obj)
{

var fileId=$(obj).attr('data-Id');
   var postion=fileId.substring(fileId.lastIndexOf('_')+1);
     $('#'+fileId).remove();

$("input[name='Financefile"+postion+"']").val(null);
$("input[name='Financefile"+postion+"']").show();
	    	$('#FinanceFile_'+postion).show();


}


function SaveAttachmentitemforFinance(data,Id)
 {
$('#hdnFinanceDetailsID').val(Id);
//	var deferred = jQuery.Deferred();
	var   fileName = data[0].Attachment;


//var file = $(this)[0].files[0];

var getFileBuffer =function(file) {

var deferred = $.Deferred();
var reader =new FileReader();
reader.onload =function(e) {
deferred.resolve(e.target.result);
}

reader.onerror =function(e) {
deferred.reject(e.target.error);
}

reader.readAsArrayBuffer(file);

return deferred.promise();
};

getFileBuffer(file).then(function(buffer) {

$.ajax({
url: _spPageContextInfo.webAbsoluteUrl +
"/_api/web/lists/getbytitle('" + FinanceListName+"')/items(" + Id+")/AttachmentFiles/add(FileName='" + fileName +"')",
method:'POST',
data: buffer,
processData:false,
headers: {
"Accept":"application/json; odata=verbose",
"content-type":"application/json; odata=verbose",
"X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
"content-length": buffer.byteLength
}
});

});
}



   
/* function SaveAttachmentitemforFinance(data,Id)
 {
$('#hdnFinanceDetailsID').val(Id);
//	var deferred = jQuery.Deferred();
	var   fileName = data[0].Attachment;


//var file = $(this)[0].files[0];

  var getFileBuffer = function(file) {

   var deferred = $.Deferred();
   var reader = new FileReader();

   reader.onload = function(e) {
    deferred.resolve(e.target.result);
   }

   reader.onerror = function(e) {
    deferred.reject(e.target.error);
   }

   reader.readAsArrayBuffer(file);

   return deferred.promise();
  };

  getFileBuffer(file).then(function(buffer) {

   $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl +
     "/_api/web/lists/getbytitle('" + FinanceListName+ "')/items(" + Id+ ")/AttachmentFiles/add(FileName='" + fileName + "')",
    metFinance: 'POST',
    data: buffer,
    processData: false,
    headers: {
     "Accept": "application/json; odata=verbose",
     "content-type": "application/json; odata=verbose",
     "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
     "content-length": buffer.byteLength
    }
   });

  });
}
*/
function GetAttachmentsFinanceSuccess(data)
{
var attachmentshtml='';
if(data.length>0)
 {
for(var i=0;i<data.length;i++)
	{
		var rawfilename=data[i].Filename;
		var position1=$('#hdnrowpositionFinance').val();
		position1=parseInt(position1);
		 var position= parseInt(position1+1);
		//if($('#FinanceattachedFiles_'+position).text()!='')
	    	//{
	    		//$('#FinanceattachedFiles_'+position).append(''+parseInt(1)+'. <a href="'+data[i].Fileurl+'" target="_blank">'+data[i].Filename+'</a><a onclick="DeleteAttachment(this)" data-filename="'+data[i].Filename+'"><img border="0" alt="Delete Attachment" src="/sites/iffco/SnD/BusinessCR/Style Library/Image/Delete_Icon.png?ver=1.0" width="20" height="20" style="margin-left: 10px;cursor: pointer;"></a>');
	    	if($('#hdnFinanceApprovalStatus').val()=='Approved')	
	      {
	    	$('#FinanceattachedFiles_'+position).append('<div id="Financefilediv_'+position+'">'+parseInt(0+1)+'.<a href="'+data[i].Fileurl+'" target="_blank">'+data[i].Filename+'</a></div>');
	      }	
	      else
	      {
	    	$('#FinanceattachedFiles_'+position).append('<div id="Financefilediv_'+position+'">'+parseInt(0+1)+'.<a href="'+data[i].Fileurl+'" target="_blank">'+data[i].Filename+'</a><a onclick="DeleteFinanceAttachmentwithId(this)" data-Id="Financefilediv_'+position+'" data-filename="'+data[i].Filename+'"><img border="0" alt="Delete Attachment" src="/sites/bscindia/ExitProcess/Style Library/ExitProcess/images/rubbish-bin-org.svg" width="20" height="20" style="margin-left: 10px;cursor: pointer;"></a></div>');

	      }

	    	//$('#FinanceattachedFiles_'+position).append('<div id="Financefilediv_'+position+'">'+parseInt(0+1)+'.<a href="'+data[i].Fileurl+'" target="_blank">'+data[i].Filename+'</a><a onclick="DeleteFinanceAttachmentwithId(this)" data-Id="Financefilediv_'+position+'" data-filename="'+data[i].Filename+'"><img border="0" alt="Delete Attachment" src="/sites/bscindia/ExitProcess/Style Library/ExitProcess/images/rubbish-bin-org.svg" width="20" height="20" style="margin-left: 10px;cursor: pointer;"></a></div>');
	    	$('#FinanceFile_'+position).hide();
	    	 
	    
    }
   }
    else
   {
    $('#Financefilediv_'+Financepostion).remove();
	$("input[name='Financefile"+Financepostion+"']").val(null);
	$("input[name='Financefile"+Financepostion+"']").show();
	    	$('#FinanceFile_'+Financepostion).show();

   }
	HideLoader();
	$("#BSIPLoader").hide()


}
 function GetAttachmentsFinanceFailure()
{

}
function DeleteFinanceAttachmentwithId(obj)
{
ShowLoader();
$("#BSIPLoader").show()

   var fileId=$(obj).attr('data-Id');
   Financepostion=fileId.substring(fileId.lastIndexOf('_')+1);
   FinanceId=$('#Financerequest'+Financepostion).text();
   if(FinanceId!=null && FinanceId!=undefined && FinanceId!='')
   {
   var filename=$(obj).attr('data-filename');
	DeleteAttachmentfromList(filename,FinanceId,FinanceListName,DeleteFinanceAttachmentSuccess,DeleteFinanceAttachmentFailure);
   }
   else
   {
   $('#'+fileId).remove();

$("input[name='Financefile"+Financepostion+"']").val(null);
$("input[name='Financefile"+Financepostion+"']").show();
	    	$('#FinanceFile_'+Financepostion).show();

   
   }
	
}


function DeleteFinanceAttachmentSuccess(data)
{
	//totalfunctions++;
	GetAttachmentsforFinance(FinanceId,GetAttachmentsFinanceSuccess,GetAttachmentsFinanceFailure);

}

function DeleteFinanceAttachmentFailure(data)
{
	//totalfunctions--;
	HideLoader();
}
