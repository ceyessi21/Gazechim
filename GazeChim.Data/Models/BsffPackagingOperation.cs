using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class BsffPackagingOperation
    {
        public BsffOperationCode? Code { get; set; }
        public string? Description { get; set; }
        public DateTime? Date { get; set; }
        public bool? NoTraceability { get; set; }

        public BsffPackagingNextDestination? NextDestination { get; set; }
        public Signature? Signature { get; set; }

    }
}
