namespace GazeChim.Data.Models
{
    public class BsffFicheIntervention
    {
        public string Id { get; set; }
        public string Numero { get; set; }
        public float Weight { get; set; }
        public BsffDetenteur Detenteur { get; set; }
        public BsffOperateur Operateur { get; set; }
        public string PostalCode { get; set; }


    }
}
