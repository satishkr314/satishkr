localStorage.tasks=JSON.stringify([]);
function addEvent()
{
	let takeinput=document.getElementById("input");
	let tasksArr=JSON.parse(localStorage.tasks);
	tasksArr.push(takeinput.value);
	localStorage.tasks=JSON.stringify(tasksArr);
	takeinput.value="";
	updatelist();
}
function updatelist()
{
	let ul=document.getElementById("eleAdd");
	let tasksArr=JSON.parse(localStorage.tasks);
	let length=tasksArr.length;
	let html="";
	for(let i=0;i<length;i++)
	{
		html+= '<li id="'+i+'">'+tasksArr[i]+'</li>';
	}
	ul.innerHTML=html;
}
function removeItem(tag)
{
	let index_id=tag.parentElement.Id;

}