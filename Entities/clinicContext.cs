using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SEPHMS.Entities
{
    public partial class clinicContext : DbContext
    {
        public clinicContext()
        {
        }

        public clinicContext(DbContextOptions<clinicContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Adminaccount> Adminaccounts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Equipment> Equipment { get; set; }
        public virtual DbSet<Medicine> Medicines { get; set; }
        public virtual DbSet<Medicinestockhistory> Medicinestockhistories { get; set; }
        public virtual DbSet<Nurse> Nurses { get; set; }
        public virtual DbSet<Signup> Signups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;database=clinic;user=root", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.27-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_general_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Adminaccount>(entity =>
            {
                entity.ToTable("adminaccount");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Mobilenumber)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mobilenumber");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Categoryname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("categoryname");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("doctor");

                entity.Property(e => e.DoctorId)
                    .HasColumnType("int(11)")
                    .HasColumnName("doctorId");

                entity.Property(e => e.DoctorAddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorAddress");

                entity.Property(e => e.DoctorFirstName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorFirstName");

                entity.Property(e => e.DoctorGmailAcc)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorGmailAcc");

                entity.Property(e => e.DoctorLastName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorLastName");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Equipment>(entity =>
            {
                entity.ToTable("equipment");

                entity.Property(e => e.EquipmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("equipmentId");

                entity.Property(e => e.EquipmentName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("equipmentName");

                entity.Property(e => e.EquipmentStock)
                    .IsRequired()
                    .HasMaxLength(11)
                    .HasColumnName("equipmentStock");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Medicine>(entity =>
            {
                entity.ToTable("medicine");

                entity.Property(e => e.MedicineId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineId");

                entity.Property(e => e.Category)
                    .HasColumnType("int(11)")
                    .HasColumnName("category");

                entity.Property(e => e.Datepurchased)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("datepurchased");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("description");

                entity.Property(e => e.Expirydate)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("expirydate");

                entity.Property(e => e.MedicineName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("medicineName");

                entity.Property(e => e.MedicineStock)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineStock");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");

                entity.Property(e => e.Units)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("units");
            });

            modelBuilder.Entity<Medicinestockhistory>(entity =>
            {
                entity.HasKey(e => e.MedicineStockId)
                    .HasName("PRIMARY");

                entity.ToTable("medicinestockhistory");

                entity.Property(e => e.MedicineStockId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineStockId");

                entity.Property(e => e.AddedStock)
                    .HasColumnType("int(11)")
                    .HasColumnName("addedStock");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("date");

                entity.Property(e => e.MedicineId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineId");
            });

            modelBuilder.Entity<Nurse>(entity =>
            {
                entity.ToTable("nurse");

                entity.Property(e => e.NurseId)
                    .HasColumnType("int(11)")
                    .HasColumnName("nurseId");

                entity.Property(e => e.NurseAddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseAddress");

                entity.Property(e => e.NurseFirstName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseFirstName");

                entity.Property(e => e.NurseGmail)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseGmail");

                entity.Property(e => e.NurseLastName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseLastName");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Signup>(entity =>
            {
                entity.ToTable("signup");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
