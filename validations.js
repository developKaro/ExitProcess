function RemoveNavClass()
{
	$('.BCRtabs li').removeClass('active').removeClass('show');
	$( ".tab-pane" ).removeClass('active').removeClass('show').removeClass('in');

}

function GoToHODTab()
{
	 RemoveNavClass();
		$( "#HodTab" ).addClass( "active show" );
		$( "#HODTabDetails" ).addClass( "in active show" );
			
}

function ShowEmployeeDetails()
{
	 RemoveNavClass();
		$( "#EmployeeBasicDetailsTab" ).addClass( "active show" );
		$( "#EmployeeDetails" ).addClass( "in active show" );
			
}






function InitializeDatePicker()
{

$('#txtDOJ').fdatepicker({
		format: 'dd-mm-yyyy',
		disableDblClickSelection: true,
		pickTime: false,
	});
	$('#txtResgdate').fdatepicker({
		format: 'dd-mm-yyyy',
		disableDblClickSelection: true,
		pickTime: false,
	});

	$('#txtLWD').fdatepicker({
		format: 'dd-mm-yyyy',
		disableDblClickSelection: true,
		pickTime: false,
	});

		
}


function ChecktextboxValidation(maindivId)
{
	var isvalidationfailed=true;
	var objvalidation=new formvalidationEntity();
	var errormessage='';
	$('#'+maindivId+' .Value-Submit-Required').each(function(){
	
		if($(this).val().trim()=='')
		{
			isvalidationfailed=false;
			errormessage+=$(this).attr('name')+' is mandatory<br/>';
		}

	});
	
	if(!isvalidationfailed)
	{
		objvalidation.msg=errormessage;
		objvalidation.result=false;

	}
	else
	{
		objvalidation.msg='';
		objvalidation.result=true;
	}
	return objvalidation;	
}

function CheckdropdownValidation(maindivId)
{
	var isvalidationfailed=true;
	var objvalidation=new formvalidationEntity();
	var errormessage='';
	$('#'+maindivId+' .Select-Submit-Required').each(function(){
		if($(this).val()=='Select')
		{
			isvalidationfailed=false;
			errormessage+=$(this).attr('name')+' is mandatory<br/>';
		}
		
	});

	
	if(!isvalidationfailed)
	{
		objvalidation.msg=errormessage;
		objvalidation.result=false;

	}
	else
	{
		objvalidation.msg='';
		objvalidation.result=true;
	}
	return objvalidation;	
}

function ChecktextareaValidation(maindivId)
{
	var isvalidationfailed=true;
	var objvalidation=new formvalidationEntity();
	var errormessage='';
	$('#'+maindivId+' .TextArea-Submit-Required').each(function(){
		if($(this).val().trim()=='')
		{
			isvalidationfailed=false;
			errormessage+=$(this).attr('name')+' is mandatory<br/>';
		}
		
	});

	
	if(!isvalidationfailed)
	{
		objvalidation.msg=errormessage;
		objvalidation.result=false;

	}
	else
	{
		objvalidation.msg='';
		objvalidation.result=true;
	}
	return objvalidation;	
}


function formatDatePickerDate(datevalue)
{
	var newdate=datevalue.split('-');
	return newdate[2]+'-'+newdate[1]+'-'+newdate[0];
}


function InitializePeoplefileds()
{
	initializePeoplePicker('pplHODManager');
	initializePeoplePicker('pplNoHODManager');
}

function initPeoplepickerChange()
{
	this.SPClientPeoplePicker.SPClientPeoplePickerDict.pplApprDepHead_TopSpan.OnUserResolvedClientScript = function(peoplePickerId, selectedUsersInfo) {
            console.log('inside OnUserResolvedClientScript');
            var users = selectedUsersInfo;
            
            if(users.length>=1)
            {
            	$('#pplApprDepHead_TopSpan_EditorInput').attr('readonly',true);
            }
            else
            {
            	$('#pplApprDepHead_TopSpan_EditorInput').removeAttr('readonly');
			}
        };
 }
