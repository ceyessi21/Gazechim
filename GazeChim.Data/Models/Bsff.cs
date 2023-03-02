using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class Bsff : ITrackDechetModel
    {
        public string Id { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
        public bool IsDraft { get; set; }
        public BsffType Type { get; set; }
        public string status { get; set; }
        public BsffEmitter Emitter { get; set; }
        public BsffPackaging[] BsffPackagings { get; set; }
        public BsffWaste Waste { get; set; }
        public BsffWeight Weight { get; set; }
        public BsffTransporter Transporter { get; set; }
        public BsffDestination Destination { get; set; }
        public BsffFicheIntervention[] FicheInterventions { get; set; }
        public BsffPackaging[] Forwarding { get; set; }
        public BsffPackaging[] Grouping { get; set; }
        public BsffPackaging[] Repackaging { get; set; }
    }
}
