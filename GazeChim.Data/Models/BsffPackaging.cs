using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class BsffPackaging
    {
        public string Id { get; set; }
        public string BsffId { get; set; }
        public string Numero { get; set; }
        public BsffPackagingType Type { get; set; }
        public string? Other { get; set; }
        public string Name { get; set; }
        public float? Volume { get; set; }
        public float Weight { get; set; }
        public BsffPackagingAcceptation? Acceptation { get; set; }

        public BsffPackagingOperation Operation { get; set; }

        public Bsff Bsff { get; set; }
        public Bsff[] NextBsff { get; set; }
        public Bsff[] InitialBsff { get; }
    }
}
