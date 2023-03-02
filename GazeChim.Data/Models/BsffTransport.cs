using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class BsffTransport
    {
        public DateTime TakenOverAt { get; set; }
        public TransportMode Mode { get; set; }

        public string[] Plates { get; set; }
        public Signature Signature { get; set; }
    }
}
