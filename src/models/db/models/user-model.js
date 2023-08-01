export default (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			lastname: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			customerId: {
				field: 'customer_id',
				type: DataTypes.INTEGER,
			},
		},
		{
			freezeTableName: true,
			underscored: true,
			timestamps: false,
			hooks: {},
		},
	)
	// ! quitar luego
	user.sync({ alter: true })

	return user
}
