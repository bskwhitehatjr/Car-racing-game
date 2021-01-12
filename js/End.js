class End
{
    constructor()
    {
        this.end = createElement('h2');
            
    }
    display()
    {
        x= player.rank;
        
        this.end.html(x+" position");
        this.end.position(displayWidth/2 - 200, 335);
        this.end.style('font-size', '140px');
        this.end.style('color', 'white');
        
    }  
}