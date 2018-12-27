enum Team
{
  None,
  Red,
  Green,
  Blue,
  Yellow
}

enum Color
{
    Pink,
    Red,
    Brown,
    Orange,
    Yellow,
    Green,
    SkyBlue,
    Blue,
    Purple
}

class Tile
{
    constructor()
    {}
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}

class PlanetTile extends Tile
{
    team:Team;
    color:Color;
    building

    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}
class StartTile extends Tile
{
    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}
class KeyTile extends Tile
{
    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}
class JailTile extends Tile
{
    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}

class TravelTile extends Tile
{
    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}

class FundTile extends Tile
{
    static fund:number=0;
    constructor()
    {
        super()
    }
    /**
     * onArrived
     */
    public onArrived() 
    {
        
    }
}

const Tiles=[new StartTile,];