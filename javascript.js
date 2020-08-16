
function map_making()
{
    var map=new Map();
    map.set([1,2],10);
    map.set([1,3],7);
    map.set([3,6],7);
    map.set([6,8],15);
    map.set([8,9],5);
    map.set([9,7],9);
    map.set([7,4],9);
    map.set([4,2],15);
    map.set([2,6],12);
    map.set([6,7],22);
    map.set([5,2],10);
    map.set([5,3],15);
    map.set([5,8],8);
    map.set([5,7],12);
    map.set([4,8],13);



    return map;
}




function path(parent,dest)
{
    var stack=[];
    stack.push(dest);
    var i=dest;

    while(i != -1)
    {
        i=parent[i];
        stack.push(i);
    }
    stack.pop();

    var answer="Shortest_Path ";
    while(!stack.isEmpty()){

        answer =answer+stack.peek()+" ->";
        stack.pop();
    }
    console.log(answer);
    document.querySelector('#answer').innerHTML=answer;

}




function shortest_path(graph,src,dest)
{
    
    var distance=[];

    for(i=0;i<=9;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = [];
    parent[src]= -1;

    //var length=[0,2,4,3,3,4,4,4,4,2];

    var map= map_making();
    
    for(i=1;i<9;i++)
    {
        for(j=1;j<=9;j++)
        {
            for(k=0;k<graph[j].length;k++)
            {
                if(distance[graph[j][k]]> distance[j]+map.get([j,k]))
                {
                    distance[graph[j][k]]=distance[j]+map.get([j,k]);
                    parent[graph[j][k]]=j;
                }
            }
        }
    }
    
    console.log(distance[dest]);
        
}




function main()
{
    var graph= [
        ["This is here to make indexing one based"]
        [2,3],
        [1,5,4,6] ,
        [1,5,6] ,
        [2,7,8] ,
        [2,3,7,8] ,
        [2,3,7,8] ,
        [4,5,6,9] ,
        [4,5,6,9] ,
        [7,8]
    ];
    var e=15;
    var n=9;

    var src= (document.querySelector("#input_source").value);
    var dest= (document.querySelector("#input_destination").value);

    console.log(graph[2][2]);
   
    shortest_path(graph,src,dest);

}


document.querySelector("#input_button").addEventListener('click',main);