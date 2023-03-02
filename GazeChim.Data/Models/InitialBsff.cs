using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class InitialBsff
    {
        public string Id { get; set; }
        public BsffType Type { get; set; }
        public BsffEmitter? Emitter { get; set; }
        public BsffDestination? Destination { get; set; }
        public BsffWaste? Waste { get; set; }
        public BsffWeight? Weight { get; set; }
        public BsffPackaging[] BsffPackagings { get; set; }
        public BsffFicheIntervention[] FicheInterventions { get; set; }
    }
}
