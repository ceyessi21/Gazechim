using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class BsffPackagingAcceptation
    {
        public DateTime Date { get; set; }
        public float Weight { get; set; }
        public WasteAcceptationStatus Status { get; set; }
        public string RefusalReason { get; set; }
        public string WasteCode { get; set; }
        public string WasteDescription { get; set; }
        public Signature Signature { get; set; }
    }
}
